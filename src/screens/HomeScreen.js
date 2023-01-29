import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return(
    <View>
      <Text style={styles.text}>Hello World!</Text>
      < Button 
      onPress={() => navigation.navigate("Components")}
      title="Go to Components Demo"/>

      <View>
        <Button
        title = "Go to List Demo"
        onPress= {() => navigation.navigate("List")}

        />
      </View>

      <View>
        <Button
        title= 'Go to Image Demo'
        onPress={() => navigation.navigate("ImageScreen")}
        />
      </View>

      <View>
        <Button
        title= 'Go to Counter Demo'
        onPress= {() => navigation.navigate('CounterScreen')}
        />
      </View>

      <View>
        <Button
        title= 'Go to Color Demo'
        onPress= {() => navigation.navigate('Color')}
        />
      </View>

      <View>
        <Button
        title = "Go to Square Demo"
        onPress={()=> navigation.navigate('Square')}
        /> 
      </View>



      <View>
        <Button
        title = "Go to Text Demo"
        onPress={()=> navigation.navigate('Text')}
        />
      </View>

      <View>
        <Button
        title = "Go to Box Demo"
        onPress={()=> navigation.navigate('Box')}
        />
      </View>

    </View>



    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

