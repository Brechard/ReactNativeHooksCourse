import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);
    const id = route.params.id;    
    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, []);
    if (!result) {
        return <ActivityIndicator style={{ flex: 1}} size="large" color="#00F" />;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item}} style={styles.image} />
                }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});


export default ResultsShowScreen;