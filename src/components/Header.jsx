import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../global/colors'

import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  const title = useSelector((state)=> state.title.value.titleSelected)

  return (
    <View style={styles.container}> 

      <Image
        style={styles.logoAncap}
        source={require('../../assets/ancap-logo.png')}
      />
      <Text style={styles.text}>{title}</Text>

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
