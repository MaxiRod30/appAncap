import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../global/colors'

const Header = () => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.logoAncap}
        source={require('../../assets/ancap-logo.png')}
      />

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        fontSize: 30,
    },
    logoAncap: {
        flexDirection:'column',
        width: 200,
        objectFit: 'contain',
      }
})
