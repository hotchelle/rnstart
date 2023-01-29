import { View, Text, StyleSheet, Button } from 'react-native'
import React, {useState,useReducer} from 'react'

/*
const CounterScreen = () => {
    const [counter,setCounter] = useState(0);

  return (
    <View>
        <Button title = 'Increase' onPress={() => {
            setCounter(counter + 1);
        }}/>
        <Button title = 'Decrease' onPress={()=>{
            setCounter(counter - 1);

        }}/>
      <Text>Current Count: {counter}</Text>
    </View>
  )
}


*/

const reducer =  (state, action) =>
{
  // state === { counter: number }
  // action === { type: 'increase' || 'decrease', payload: 1 }
  switch(action.type)
  {
    case "increase":
      return {...state, counter: state.counter + action.payload};
    case "decrease":
      return {...state, counter: state.counter - action.payload};
    default:
      return state;
  }
}

const CounterScreen = () =>
{
  const [state,dispatch] = useReducer(reducer, {counter: 0});
  
  return (
    <View>
        <Button title = 'Increase' onPress={() => { dispatch ( { type: 'increase', payload : 1 } ) } } />
        <Button title = 'Decrease' onPress={()=>  { dispatch( { type: 'decrease', payload : 1 } ) } }/>
      <Text>Current Count: {state.counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

})

export default CounterScreen;
