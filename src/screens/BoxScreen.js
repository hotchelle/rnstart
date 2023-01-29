import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style = {styles.mainStyle1}>
            <View style = {styles.viewStyle1}></View>
            <View style = {styles.viewStyle2}></View>
            <View style = {styles.viewStyle3}></View>
        

    </View>
  )
}


const styles = StyleSheet.create({

    mainStyle1 : {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
 //       alignItems: 'flex-end',
        flexDirection: 'row',
       justifyContent: 'space-between',

    },
    mainStyle2: {

    },
    textOneStyle: {
            borderWidth: 3,
            borderColor: 'red',
        //    position: 'absolute',
        //    flex: 1,
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        fontSize: 18,
    //    ...StyleSheet.absoluteFillObject
    //    alignSelf: 'stretch'
    //    flex: 1,
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    //    flex: 1,
},

textFourStyle: {

},

viewStyle1: {
    backgroundColor: 'red',
    height:50,
    width: 50,
},

viewStyle2: {
    backgroundColor: 'green',
    height:50,
    width: 50,
    marginTop: 50,

},

viewStyle3: {
    backgroundColor: 'purple',
    height:50,
    width: 50,
}

});

export default BoxScreen;