import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const easyReducer = (state, action) => {
    // This reducer does not follow the convention names, it uses:
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const reducer = (state, action) => {
    // We define this functino outside of the Square function to avoid confusion of what the state variables refer to
    // even though if we put it there, React would not confuse it we may
    // Remember that in a reducer we never change the first argument directly and we must always return a value to be used
    // as first argument

    // By convention we use the name type and payload for the variables in the action. 
    // type: 'change_xxx'. String that describes the exact change operation we want to make
    // payload: xx. Some data that is critical to the change operation

    // state === { red: number, green: number, blue: number }
    // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }



}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0})
    const { red, green, blue } = state;
    console.log(state)
    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({type: 'change_red', payload: -COLOR_INCREMENT})} 
                color="Red"/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({type: 'change_blue', payload: -COLOR_INCREMENT})} 
                color="Blue"/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({type: 'change_green', payload: -COLOR_INCREMENT})} 
                color="Green"/>
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>

    )
}

const style = StyleSheet.create({});

export default SquareScreen;