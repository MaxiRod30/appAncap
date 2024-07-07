import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
    return (
        <View >
            <Text>Home acaaaacacacacasdasdsad</Text>
            <Button
                title="Go to ItemListAlarms"
                onPress={() => navigation.navigate('ItemListAlarms')}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})