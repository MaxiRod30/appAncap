import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import CustomCalendar from '../components/CustomCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { setProd } from '../fetures/User/UserSlice'

const Home = () => {
    const dispatch = useDispatch();
   
    const selectProd = (itemValue, itemIndex) => {
        dispatch(setProd(itemValue))
    }
    const { prod } = useSelector((state) => state.auth.value);

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={prod}
                style={styles.picker}
                onValueChange={selectProd}
            >
                <Picker.Item  label="Produccion 1" value="1" />
                <Picker.Item label="Produccion 2" value="2" />
                <Picker.Item label="Produccion 3" value="3" />
                <Picker.Item label="Produccion 4" value="4" />
            </Picker>

            <CustomCalendar produccion={prod}/>


        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

      },
      picker: {
        height: 10,
        width: 200,
      },
})