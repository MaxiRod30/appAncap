import { StyleSheet, Text, View } from 'react-native'
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react'
import {colors} from '../global';

const AlarmView = ({ uid, title, hour, minutes, days, onPress, isActive, onChange,}) => {

    getAlphabeticalDays= (days) => {
        let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let activeDays = [];
        for (let i = 0; i < days.length; i++) {
          activeDays.push(weekdays[parseInt(days[i])] + ' ');
        }
        return activeDays;
      }

    return (
        <TouchableOpacity onPress={() => onPress(uid)} style={styles.container}>
            <View style={styles.leftInnerContainer}>
                <Text style={styles.clock}>
                    {hour < 10 ? '0' + hour : hour}:
                    {minutes < 10 ? '0' + minutes : minutes}
                </Text>
                <View style={styles.descContainer}>
                    <Text>{getAlphabeticalDays(days)}</Text>
                </View>
            </View>
            <View style={styles.rightInnerContainer}>
                <Switch
                    ios_backgroundColor={'black'}
                    trackColor={{ false: colors.GREY, true: colors.BLUE }}
                    value={isActive}
                    onValueChange={onChange}
                />
            </View>
        </TouchableOpacity>
    )
}

export default AlarmView

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    leftInnerContainer: {
        margin: 5,
        flex: 1,
        alignItems: 'flex-start',
    },
    rightInnerContainer: {
        margin: 5,
        marginRight: 0,
        flex: 1,
        alignItems: 'flex-end',
    },
    descContainer: {
        flexDirection: 'row',
        color: 'grey',
    },
    clock: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 10,
    },

})