import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/filtersSlice';

const Search = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        dispatch(setSearch(searchText))
    }, [searchText])

    return (
        <TextInput
            style={styles.searchInput}
            onChangeText={setSearchText}
            value={searchText}
            placeholder="Search..."
        />
    )
}

const styles = StyleSheet.create({
    searchInput: {
        marginBottom: 15,
        fontSize: 17,
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
    }
})

export default Search