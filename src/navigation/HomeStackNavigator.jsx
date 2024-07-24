
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ItemListAlarms from "../screens/ItemListAlarms";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="Home" component={Home} />

          </Stack.Navigator>
  );
}
