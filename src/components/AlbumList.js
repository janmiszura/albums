import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class AlbumList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AlbumList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 12
  }
});
