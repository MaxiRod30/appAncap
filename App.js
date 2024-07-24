import { useCallback } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from './src/global/colors'

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './src/navigation/Navigator';

import { initSQLiteDB } from "./src/persistence"; 

import { Provider } from "react-redux";
import store from "./src/store";

//***Creacion de tabla ***
(async ()=> {
  try {
    const response = await initSQLiteDB()
    console.log({responseCreatingDB: response})
    console.log("DB Inicilized")
  } catch (error) {
    console.log({errorCreatingDB: error})
  }
})()
//*******************

export default function App() {

  //*** Configuracion de fuente ***

  const [fontsLoaded, fontError] = useFonts({
    RubikMonoOne: require('./assets/fonts/RubikMonoOne-Regular.ttf'),
    Josefin: require("./assets/fonts/JosefinSans-Regular.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  //************************

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
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
