import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  
  state = { albums: [] };

  componentDidMount() {
    console.log('componentDidMount on AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then( response => console.log(response) );
  }

  renderAlbums() {
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AlbumList!!!!</Text>
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
