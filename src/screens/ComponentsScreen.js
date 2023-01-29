import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const myText= <Text style = {styles.subHeader}>My name is Abood!</Text>
    return (
        <View>
            <Text style={styles.textStyle} >Getting started with React Native!</Text>
            {myText}
        </View>
    )
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 45
    },
    subHeader:
    {
        fontSize: 20,
    },
})

export default ComponentsScreen;