import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import Album from './Album';

export default class AlbumList extends Component {
  
  state = { albums: [] };

  componentDidMount() {
    console.log('componentDidMount on AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then( response => this.setState({ albums : response.data }) );
  }

  renderAlbums() {
    return this.state.albums.map( album => 
      <Album key={album.title} album={album}></Album> 
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderAlbums()}
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
