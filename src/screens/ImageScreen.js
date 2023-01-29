import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text>ImageScreen</Text>
      <ImageDetail title = "Forest" imageSource = {require('../../assets/forest.jpg')} imageScore = "9"/>
      <ImageDetail title = "Beach" imageSource = {require('../../assets/beach.jpg')} imageScore = "7"/>
      <ImageDetail title = "Mountatins" imageSource= {require('../../assets/mountain.jpg')} imageScore = "4"/>
    </View>
  )
};


const styles = StyleSheet.create({

});

export default ImageScreen;