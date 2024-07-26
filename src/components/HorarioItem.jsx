import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { colors } from '../global/colors'


const HorarioItem = ({ textRelevo,textLoRelevo, diaSelected}) => {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Día: {diaSelected}</Text>   
        <Text style={styles.text}>{textRelevo}</Text> 
        <Text style={styles.text}>{textLoRelevo}</Text>    
    </View>
  )
}

export default HorarioItem

const styles = StyleSheet.create({
  container: {
    magin: 10,
    padding: 10,
    backgroundColor: colors.GREY,
    justifyContent: 'right',
    alignItems: 'right',
    height: 100,
    width: '100%',
    flexDirection: 'column',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: "black",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: "black",
  }

})
