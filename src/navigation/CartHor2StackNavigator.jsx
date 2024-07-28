import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartHor2 from '../screens/CartHor2'

const Stack = createNativeStackNavigator()

const CartHor2StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Horarios Turno 2"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CartHor2Screen" component={CartHor2} />
    </Stack.Navigator>
  );
}

export default CartHor2StackNavigator