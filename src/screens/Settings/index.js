/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

export default class Settings extends Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text onPress={()=> this.props.navigation.dispatch({type:'Navigation/NAVIGATE', routeName:'Logins'})}>I'm the Settings component</Text>
    //   </View>
    // );
    return (
      <Container>
        <Content>
          <List>
            <ListItem icon>
              <Body>
                <Text>Show Info On Startup</Text>
              </Body>
              <Right>
                <Switch
                  onValueChange={()=>this.props.onChangeShowInfo()}
                  value={this.props.showInfoStartup} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
