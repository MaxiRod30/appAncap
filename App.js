import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Comiste trolo, putoooo!!!!</Text>
        <Text>Comiste trolo, putoooo!!!!</Text>
        <Text>Comiste trolo, putoooo!!!!</Text>
        <Text>Comiste trolo, putoooo!!!!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(255,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
