import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartHor3 from '../screens/CartHor3'

const Stack = createNativeStackNavigator()

const CartHor3StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Horarios Turno 3"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CartHor3Screen" component={CartHor3} />
    </Stack.Navigator>
  );
}

export default CartHor3StackNavigator