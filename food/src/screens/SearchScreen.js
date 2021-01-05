import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Madrid'
                }
            });
            setResults(response.data.businesses)    
            setErrorMessage('');
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF'
    }
});

export default SearchScreen;