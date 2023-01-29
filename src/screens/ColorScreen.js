import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import React, { useState } from 'react'


const ColorScreen = () => {
    const [colors,setColors] = useState([]);
    return (
    <View>
        <Button title = 'Add color' onPress={()=> {
            setColors([...colors, randomRgb()])
        }}/>
        <FlatList
        keyExtractor={(item)=> item}
        data = {colors}
        renderItem = {({ item }) => {
            return(
                <View style= {{ height: 100, width: 100, backgroundColor: item }}/>
            )
        }}
        
        
        />
    </View>
  )
}

const randomRgb = () =>
{
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({

})

export default ColorScreen;