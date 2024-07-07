import { useCallback } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import { colors } from './src/global/colors'

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './src/navigation/Navigator';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  //*** Configuracion de fuente ***

  const [fontsLoaded, fontError] = useFonts({
    'RubikMonoOne': require('./assets/fonts/RubikMonoOne-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  //************************

  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.lightGray,
  },
});
