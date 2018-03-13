/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { Spinner } from 'native-base'

class ModalOverlay extends Component {
  render() {
    // const customFlex = this.props.modalOverlay ? 1 : 0
    return (
      <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalOverlay}
          onRequestClose={() => {
            // this.props.dispatch({type:'HIDE_OVERLAY'})
            alert('canot')
          }}>
          <View style={[styles.container,{flex:this.props.customFlex}]}>
              <Spinner color='#fff'/>
              <Text style={{color:'#fff'}} onPress={()=>this.props.dispatch({type:'HIDE_OVERLAY'})}>Please wait...</Text>
          </View>
        </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  modalOverlay : state.modalOverlay,
  customFlex : state.modalOverlay ? 1 : 0
})

export default connect(mapStateToProps)(ModalOverlay)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0203048f'
  },
});
