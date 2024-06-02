
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../global/colors'
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
                // markedDates={{
                //     '2024-06-05': { selected: true, marked: true, selectedColor: 'blue' },
                //     '2024-06-10': { marked: true },
                //     '2024-06-03': { selected: true, marked: true, selectedColor: 'blue' },
                //     '2024-06-04': { selected: true, marked: true, selectedColor: 'blue' },
                //     '2024-06-06': { selected: true, marked: true, selectedColor: 'blue' }
                // }}
                markingType={'period'}
                markedDates={{
                  '2024-06-20': { startingDay: true, color: 'green', textColor: 'white'},
                  '2024-06-21': {marked: true, dotColor: 'red', color: 'green', textColor: 'white'},
                  '2024-06-25': { selected: true, endingDay: true, color: 'green', textColor: 'white'},
                }}
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

