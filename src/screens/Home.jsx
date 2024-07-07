import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setTitleSelected } from '../fetures/TitleNav/TitleNavSlice';

const Home = ({navigation}) => {
    const dispatch = useDispatch()

    const botonSalida = () => {
        dispatch(setTitleSelected('puto'))
        navigation.navigate('ItemListAlarms')
    }

    return (
        <View >
            <Text>Home acaaaacacacacasdasdsad</Text>
            <Button
                title="Go to ItemListAlarms"
                onPress={() => {botonSalida()}}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})