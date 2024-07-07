import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import BottomTapNavigator from './BottomTapNavigator'

const Navigator = () => {
  return (
    <NavigationContainer>

      <BottomTapNavigator />

    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})