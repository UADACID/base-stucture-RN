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
    return (
      <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalOverlay}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
              <Spinner color='#fff'/>
              <Text style={{color:'#fff'}} onPress={()=>this.props.dispatch({type:'HIDE_OVERLAY'})}>Please wait...</Text>
          </View>
        </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  modalOverlay : state.modalOverlay
})

export default connect(mapStateToProps)(ModalOverlay)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0203048f'
  },
});
