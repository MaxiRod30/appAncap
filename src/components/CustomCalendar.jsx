
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { localeEs } from '../global/localeCalendar';
import { caluloCalendar, turnoToProd } from '../helper/index';
import { useState, useEffect } from 'react';
import HorarioItem from './HorarioItem';

LocaleConfig.locales['es'] = localeEs;
LocaleConfig.defaultLocale = 'es';

const CustomCalendar = ({ produccion }) => {
    const [markedDates, setMarkedDates] = useState({});
    const [selectedDay, setSelectedDay] = useState("");
    const [textRelevo, seTextRelevo] = useState("");
    const [textLoRelevo, seTextLoRelevo] = useState("");

    const [selectedMonth, setSelectedMonth] = useState(`${new Date().getMonth() + 1}`);
    const [selectedYear, setSelectedYear] = useState(`${new Date().getFullYear()}`);

    const changeMonth = (data) => {
        setSelectedMonth(data.month)
        setSelectedYear(data.year)
    }

    const handleDayPress = (day) => {
        let turnoReleva = 0;
        let turnoLoReleva = 0;

        setSelectedDay(day.dateString)

        const turnoActual = turnoToProd(day.day-1, day.month, day.year, produccion)

        if (turnoActual != "0") {
            if (turnoActual == "3") {
                turnoReleva = "2";
                turnoLoReleva = "1";
            } else if (turnoActual == "2") {
                turnoReleva = "1";
                turnoLoReleva = "3";
            }
            else if (turnoActual == "1") {
                turnoReleva = "3";
                turnoLoReleva = "2";
            }

            for (let index = 1; index <= 4; index++) {
                if (turnoToProd(day.day-1, day.month, day.year, index.toString()) == turnoReleva) {
                    seTextRelevo(`Releva a la produccion ${index}`)
                }
                if (turnoToProd(day.day-1, day.month, day.year, index.toString()) == turnoLoReleva) {
                    seTextLoRelevo(`Lo releva produccion ${index}`)
                }
            }
        }else{
            seTextLoRelevo(`Releva produccion 0`)
            seTextRelevo(`Lo releva produccion 0`)
        }
    }

    useEffect(() => {
        const fechas = caluloCalendar(selectedYear, selectedMonth, produccion)
        setMarkedDates(fechas)

    }, [selectedMonth, selectedYear, produccion]);

    return (
        <View style={styles.container}>
            <Calendar
                style={styles.calendarStyle}
                theme={{
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: 'blue',
                    indicatorColor: 'blue',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '350',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '350',
                    textDayFontSize: 20,
                    textMonthFontSize: 20,
                    textDayHeaderFontSize: 20
                }}
                                
                onDayPress={handleDayPress}
                onMonthChange={changeMonth}

                markedDates={markedDates}
            />
            {
            selectedDay &&
                <HorarioItem textRelevo={textRelevo} textLoRelevo={textLoRelevo} diaSelected={selectedDay} />
            }

            <View style={styles.conteinerTurnos}>

                <Text style={styles.turn1}>Turno 1: 22:00 - 06:00 </Text>

                <Text style={styles.turn2}>Turno 2: 06:00 - 14:00</Text>

                <Text style={styles.turn3}>Turno 3: 14:00 - 22:00</Text>
            </View>
        </View>
    )
}

export default CustomCalendar

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',

    },
    calendarStyle: {
        fontSize: 10,
        width: '100%',
        borderWidth: 1,
       
    },
    conteinerTurnos: {
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'right',
        maringbutton: 10,
    },
    turn1: {
        color: 'red',
    },
    turn2: {
        color: 'green',
    },
    turn3: {
        color: 'blue',
    }
})

