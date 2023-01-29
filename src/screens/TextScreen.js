import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'

const TextScreen = () => {
    const [password,setPassword]= useState("");

  return (
    <View>
        <Text>Enter Name:</Text>
        <TextInput
        style = {styles.input}
        autoCapitalize = 'none'
        autoCorrect = {false}
        value = {password}
        onChangeText={(newValue) => {
            setPassword(newValue);
        }}
        />
        {password.length < 5 ? <Text>password should be longer than 5</Text> : null}

    </View>
  )
}

const styles = StyleSheet.create({

    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },

})

export default TextScreen