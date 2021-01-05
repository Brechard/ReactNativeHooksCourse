import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    )
}
const size = 50;

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between'
        // alignItems: 'flex-end'
    },
    viewOneStyle: {
        backgroundColor: 'red',
        height: size,
        width: size,
    },
    viewTwoStyle: {
        backgroundColor: 'green',
        height: size,
        width: size,
        top: size
    },
    viewThreeStyle: {
        backgroundColor: 'blue',
        height: size,
        width: size,
    },
});

export default BoxScreen;