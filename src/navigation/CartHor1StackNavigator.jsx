
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartHor1 from '../screens/CartHor1'

const Stack = createNativeStackNavigator()

const CartHor1StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Horarios Turno 1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CartHor1Screen" component={CartHor1} />
    </Stack.Navigator>
  );
}

export default CartHor1StackNavigator