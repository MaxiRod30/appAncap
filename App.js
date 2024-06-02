import { SafeAreaView, StyleSheet, View,} from 'react-native';
import Home from './src/screens/Home';
import {colors} from './src/global/colors'
import CustomCalendar from './src/components/CustomCalendar';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Home />
        <CustomCalendar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:"10%",
    backgroundColor: colors.lightGray,
  },
});
