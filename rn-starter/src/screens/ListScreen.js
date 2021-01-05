import React from 'react';
import { VIew, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20},
        { name: 'Friend #2', age: 31},
        { name: 'Friend #3', age: 523},
        { name: 'Friend #4', age: 12},
        { name: 'Friend #5', age: 56},
        { name: 'Friend #6', age: 84},
        { name: 'Friend #7', age: 62},
        { name: 'Friend #8', age: 237},
        { name: 'Friend #9', age: 5},
    ]
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;