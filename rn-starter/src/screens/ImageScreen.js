import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const home = '../../assets/'
    return (
        <View>
            <ImageDetail title='Forest' source={require(`${home}forest.jpg`)} score='10'/>
            <ImageDetail title='Beach' source={require(`${home}beach.jpg`)} score='2'/>
            <ImageDetail title='Montain' source={require(`${home}mountain.jpg`)} score='4'/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;