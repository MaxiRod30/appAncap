
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { localeEs } from '../global/localeCalendar';

LocaleConfig.locales['es'] = localeEs;
LocaleConfig.defaultLocale = 'es';

const CustomCalendar = () => {
    return (
        <View style={styles.container}>
            <Calendar
                style={styles.calendarStyle}
                onDayPress={day => {
                    console.log('selected day', day);
                }}
                 current={'2024-06-03'}
                // dayComponent={({date, state}) => {
                //     return (
                //       <View>
                //         <Text  style={{textAlign: 'center', backgroundColor: state==='today' ? 'white':'white',width:50,color: state === 'disabled' ? 'red' : 'black'}}>{date.day}</Text>
                //       </View>
                //     );
                //   }}
                markedDates={{
                    '2024-06-02': { selected: true, marked: false,selectedTextColor: 'red', selectedColor: '#E1E493' },
                    '2024-06-03': { selected: true, marked: false,selectedTextColor: 'red',selectedColor: 'white' },
                    '2024-06-04': { selected: true, marked: false,selectedTextColor: 'red',selectedColor: 'white' },
                    '2024-06-05': { selected: true, marked: false,selectedTextColor: 'red',selectedColor: 'white' },
                    '2024-06-06': { selected: true, marked: false,selectedTextColor: 'red',selectedColor: 'white' },
                }}
                // markingType={'period'}
                // markedDates={{
                //     '2024-06-22': {color: 'gray',textColor: 'red', startingDay: true, endingDay: true},
                //     '2024-06-25': { startingDay: true, color: 'green', textColor: 'white'},
                //   '2024-06-21': {marked: true, dotColor: 'red', color: 'green', textColor: 'white'},
                //   '2024-06-27': { selected: true, endingDay: true, color: 'green', textColor: 'white'},
                // }}
            />

        </View>
    )
}

export default CustomCalendar

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',

    },
    calendarStyle: {
        
        width: '100%',
        borderWidth: 1,

    }
})

