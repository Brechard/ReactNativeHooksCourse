import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const changeValue = 1;

const reducer = (state, action) => {
    // state === { count: number }
    // action === {type: 'increment' || 'decrement', payload: 1}
    switch (action.type){
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
        default:
            return state;
    }
}

const CounterScreenReducer = () => {
    const [state, dispatcher] = useReducer(reducer, {count: 0});
    return (
        <View>
            <Button title='Increase' onPress={() => dispatcher({type: 'increment', payload: changeValue})} />
            <Button title='Decrease' onPress={() => dispatcher({type: 'decrement', payload: changeValue})} />
            <Text>Counter count: {state.count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreenReducer;