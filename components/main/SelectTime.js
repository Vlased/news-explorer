import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'
import { useDispatch, useSelector } from 'react-redux'
import createDatesArray from '../../helpers/createDatesArray'
import { setTime } from '../../redux/slices/filtersSlice'

const SelectTime = () => {
    const filterTimeArr = createDatesArray();
    const filterTimeLabels = filterTimeArr.map(timeObj => timeObj.label);

    const dispatch = useDispatch();
    const { time } = useSelector(state => state.filtersReducers.filters);

    const [selectedFiltering, setSelectedFiltering] = useState(time.label);

    useEffect(() => {
        const timeObjToSet = filterTimeArr.find(timeObj => timeObj.label === selectedFiltering);
        if(timeObjToSet){
            dispatch(setTime(timeObjToSet))
        }
    }, [selectedFiltering])

    return (
        <View>
            <SelectList
                search={false}
                data={filterTimeLabels}
                setSelected={setSelectedFiltering}
                placeholder={filterTimeLabels[0]}
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
        padding: 15,
        marginTop: 15,
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

export default SelectTime