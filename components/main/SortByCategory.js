import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'
import { useDispatch, useSelector } from 'react-redux'
import { SORTING_TYPES } from '../../constants/sortingTypes'
import { setSorting } from '../../redux/slices/filtersSlice'

const sortingTypes = Object.keys(SORTING_TYPES);

const SortByCategory = () => {
    const dispatch = useDispatch();
    const { sorting } = useSelector(state => state.filtersReducers.filters);

    const [selectedSorting, setSelectedSorting] = useState(sorting);

    useEffect(() => {
        dispatch(setSorting(SORTING_TYPES[selectedSorting]))
    }, [selectedSorting])

    return (
        <View>
            <SelectList
                search={false}
                data={sortingTypes}
                setSelected={setSelectedSorting}
                placeholder={sortingTypes[1]}
                boxStyles={styles.box}
                inputStyles={styles.input}
                dropdownItemStyles={styles.input}
                dropdownTextStyles={styles.dropdownText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 10,
        borderWidth: 1,
    },
    input: {
        fontSize: 17,
        marginLeft: -10,
    },
    dropdownText: {
        color: "#797979",
        fontSize: 16,
    }
})

export default SortByCategory