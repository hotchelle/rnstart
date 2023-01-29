import { View, Text, StyleSheet } from 'react-native'
import React, { useReducer } from 'react'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 20

// state ===   {red : 0, green: 0, blue: 0}
// how to change state object
// action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

const reducer = (state, action) =>
{
    switch(action.type)
    {
      case "change_red":
        // never going to modify values directly like: state.red = state.red - 15
        return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload}

      case "change_green":
        return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload}

      case "change_blue":
        return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload}
      
      default:
        return state;
    }
};


const SquareScreen = () => {



// dispatch = runMyReducer
  const [state, dispatch] = useReducer(reducer, {red : 0, green: 0, blue: 0});
  console.log(state)
  const {red, green, blue} = state;



  return (
    <View>
        <ColorCounter 
        onIncrease= {()=> dispatch({type: 'change_red', payload : COLOR_INCREMENT }) }
        onDecrease= {()=> dispatch({type: 'change_red', payload : COLOR_INCREMENT * -1 })}
        color = 'Red'/>
        <ColorCounter

        onIncrease= {()=> dispatch({type: 'change_blue', payload : COLOR_INCREMENT }) }
        onDecrease= {()=> dispatch({type: 'change_blue', payload : COLOR_INCREMENT * -1 })}
        color = 'Blue'/>
    
        <ColorCounter
        onIncrease= {()=> dispatch({type: 'change_green', payload : COLOR_INCREMENT }) }
        onDecrease= {()=> dispatch({type: 'change_green', payload : COLOR_INCREMENT * -1 })}
        color = 'Green'/>

        <View style = {{ height:150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>
  )
};

const styles = StyleSheet.create({

})

export default SquareScreen;