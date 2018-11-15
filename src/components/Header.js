import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <Text style={styles.text}>Albums</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1
  },
  text: {
    fontSize: 20
  }
});
