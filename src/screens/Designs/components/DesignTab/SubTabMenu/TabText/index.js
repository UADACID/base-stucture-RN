/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import TabItem from '../../components/TabItem'
import { width, height } from '../../../../../../utils'
// const stringPath = '../../../../../../../assets/'

// const CHANGE_SUB_TAB_BOTTOM_SELECTED

class TabText extends Component {

  changeColor = (isActive) => {
    const color = isActive ? '#fa2b6f' : '#a09a9a'
    return {
      color,
    }
  }

  render() {
    const { activeFont, activeColor, activeSize, activeLength, onChangeSubTabBottom, textsLenght } = this.props
    const barrier = textsLenght == 0 ? (
      <View style={{position:'absolute', width, height:40, backgroundColor:'#01030485'}}>
      </View>
    ) : false

    return (
      <View style={styles.container}>
        <TabItem
          style={styles.tabItemContainer}
          titleStyle={this.changeColor(activeFont)}
          onPress={()=>onChangeSubTabBottom('textFont')}
          title='FONT'
          />
        <TabItem
          style={styles.tabItemContainer}
          titleStyle={this.changeColor(activeColor)}
          onPress={()=>onChangeSubTabBottom('textColor')}
          title='COLOR'
          />
        <TabItem
          style={styles.tabItemContainer}
          titleStyle={this.changeColor(activeSize)}
          onPress={()=>onChangeSubTabBottom('textSize')}
          title='SIZE'
          />
        <TabItem
          style={styles.tabItemContainer}
          titleStyle={this.changeColor(activeLength)}
          onPress={()=>onChangeSubTabBottom('textLength')}
          title='LENGTH'
          />
        {barrier}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChangeSubTabBottom = (subTabName) => dispatch({type:'CHANGE_SUB_TAB_BOTTOM_SELECTED', payload:subTabName})
  return {
    onChangeSubTabBottom
  }
}

const mapStateToProps = (state) => {
  const { activeSubTabButtom, multipleTextDragable} = state
  let activeFont = activeSubTabButtom == 'textFont' ? true : false
  let activeColor = activeSubTabButtom == 'textColor' ? true : false
  let activeSize = activeSubTabButtom == 'textSize' ? true : false
  let activeLength = activeSubTabButtom == 'textLength' ? true : false
  const texts = multipleTextDragable.texts.filter(obj => obj.isDeleted != true)

  return {
    activeFont,
    activeColor,
    activeSize,
    activeLength,
    textsLenght : texts.length
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabText)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  tabItemContainer : {
    width: width/4,
    height: 40,
    // borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#f6f6f9'
  }
});
