import React, { useState } from 'react';
import { Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        // price === '€' || '€€' || '€€€'
        return results.filter(results => results.price === price);
    };

    // console.log(results);
    return (
        // This is an empty tag, that allows us to return only one element as React requires
        // without using the <View> tag that gives a lot of problems of expanding/collapsing
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('€')} title="Cost effective" />
                <ResultsList results={filterResultsByPrice('€€')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('€€€')} title="Spender" />
            </ScrollView>
        </>
    )
};

export default SearchScreen;