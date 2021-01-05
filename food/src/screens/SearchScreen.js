import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults ();
    const filterResultsByPrice = (price) => {
        // price === '€' || '€€' || '€€€'
        return results.filter(results => results.price === price);
    };

    // console.log(results);
    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList results={filterResultsByPrice('€')} title="Cost effective"/>
            <ResultsList results={filterResultsByPrice('€€')} title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('€€€')} title="Spender"/>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF'
    }
});

export default SearchScreen;