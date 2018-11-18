import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from './Card';

export default class Album extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>{this.props.album.title}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontSize: 12
  }
});
