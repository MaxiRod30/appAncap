import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'
import CartHor1StackNavigator from './CartHor1StackNavigator'
import CartHor2StackNavigator from './CartHor2StackNavigator'
import CartHor3StackNavigator from './CartHor3StackNavigator'


import Header from '../components/Header'
import { colors } from '../global/colors'

import { FontAwesome5 , FontAwesome6, Fontisto} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const BottomTapNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => {
                    return <Header title={route.name} />;
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome6 name="house-user" size={24} color={focused ? "black" : colors.lightGray} />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Horarios1"
                component={CartHor1StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Fontisto name="night-clear" size={24} color={focused ? "black" : colors.lightGray} />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Horarios2"
                component={CartHor2StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialCommunityIcons name="weather-sunny" size={34} color={focused ? "black" : colors.lightGray}/>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Horarios3"
                component={CartHor3StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialCommunityIcons name="weather-sunset" size={32} color={focused ? "black" : colors.lightGray} />
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTapNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green700,
        height: 60
    }
})
