import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ImageDetail = ( {imageScore, title, imageSource} ) => {
  return (
    <View>
        <Image source={imageSource}/>
      <Text>{title}</Text>
      <Text>Image Score - {imageScore}</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({

})

export default ImageDetail;
