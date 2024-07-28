import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TimerPickerModal } from "react-native-timer-picker";
import * as Notifications from 'expo-notifications';
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { usePostNotificationSegundoTurnoMutation, useGetNotificationSegundoTurnoQuery } from "../services/apiInfoServices";
import { useDispatch, useSelector } from "react-redux";
import { setAlarmSelected } from "../fetures/Info/InfoSlice";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const CartHor2 = ({ navigation }) => {
  const horario = "segundoTurno"
  const extractTimeParts = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':');
    return { hours: parseInt(hours, 10), minutes: parseInt(minutes, 10) };
  };
  
  const { localId } = useSelector((state) => state.auth.value)
  const { data: dataNotif, error, isLoading } = useGetNotificationSegundoTurnoQuery(localId );
  const [alarmInit, setAlarmInit] = useState("00:00:00"); 
  const [showPicker, setShowPicker] = useState(false);
  const [activeAlarm, setActiveAlarm] = useState(false);
  const [alarmString, setAlarmString] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('Esta es tu alarma programada.');
  const [triggerAlarm, result] = usePostNotificationSegundoTurnoMutation()
  const dispatch = useDispatch()


  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  useEffect(() => {
    if (!isLoading && dataNotif?.segundoTurno!== undefined) {
      const {msg, time } = dataNotif.segundoTurno
      setAlarmInit(extractTimeParts(time))
      setAlarmString(time)
      setNotificationMessage(msg)
      setShowPicker(false);
    }
  }, [isLoading]);

  useEffect(() => {
    
    if (alarmString !== null && alarmString !== dataNotif?.segundoTurno?.time) {
    const alarm = { time: alarmString, msg: notificationMessage, horario }
      triggerAlarm({ alarm, localId })
    }

  }, [alarmString]);

  useEffect(() => {
    if (result.isSuccess & alarmString !== null) {
      dispatch(
      setAlarmSelected({
        alarm: result.data.segundoTurno.msg,
        user: result.data.segundoTurno.localId,
        horario: result.data.segundoTurno.horario,
      })
      )
    }
  }, [result])

  const formatTime = ({ hours, minutes, seconds }) => {
    const timeParts = [];
    if (hours !== undefined) timeParts.push(hours.toString().padStart(2, "0"));
    if (minutes !== undefined) timeParts.push(minutes.toString().padStart(2, "0"));
    if (seconds !== undefined) timeParts.push(seconds.toString().padStart(2, "0"));
    return timeParts.join(":");
  };

  const scheduleNotification = async (hours, minutes) => {
    const now = new Date();
    const notificationTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);


    if (now > notificationTime) {
      notificationTime.setDate(notificationTime.getDate() + 1);
    }

    const timeUntilNotification = (notificationTime - now) / 1000;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "¡Es hora de tu alarma!",
        body: notificationMessage,
      },
      trigger: { seconds: timeUntilNotification },
    });

    Alert.alert('Notificación programada', `Alarma programada para las ${formatTime({ hours, minutes })}.`);
  };

  return (
    <View style={{ backgroundColor: "#5C5858", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 18, color: "#F1F1F1", marginTop: 20, }}>
        Escriba mensaje de la notificación:
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: '#C2C2C2',
          borderWidth: 1,
          borderRadius: 5,
          width: '80%',
          marginTop: 20,
          marginBottom: 20,
          paddingHorizontal: 10,
          color: '#F1F1F1'
        }}
        placeholder="Escribe el mensaje de la notificación"
        placeholderTextColor="#C2C2C2"
        onChangeText={text => setNotificationMessage(text)}
        value={notificationMessage}
      />
      <Text style={{ fontSize: 18, color: "#F1F1F1" }}>
        {activeAlarm !== false ? "Alarma programada" : "Alarma no activada"}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setShowPicker(true)}
      >
        <View style={{ alignItems: "center" }}>
          {alarmString !== null && (
            <Text style={{ color: "#F1F1F1", fontSize: 48 }}>
              {alarmString}
            </Text>
          )}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}
          >
            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 18,
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 16,
                  overflow: "hidden",
                  borderColor: "#C2C2C2",
                  color: "#C2C2C2"
                }}
              >
                Alarma 🔔
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TimerPickerModal
        visible={showPicker}
        initialValue={alarmInit}
        setIsVisible={setShowPicker}
        onConfirm={(pickedDuration) => {
          setAlarmString(formatTime(pickedDuration));
          scheduleNotification(pickedDuration.hours, pickedDuration.minutes);
          setShowPicker(false);
          setActiveAlarm(true);
        }}
        modalTitle="Setear Alarma"
        onCancel={() => setShowPicker(false)}
        closeOnOverlayPress
        Audio={Audio}
        LinearGradient={LinearGradient}
        Haptics={Haptics}
        styles={{ theme: "dark" }}
        modalProps={{ overlayOpacity: 0.2 }}
      />
    </View>
  );
};

async function registerForPushNotificationsAsync() {

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
  const token = (await Notifications.getExpoPushTokenAsync({
    projectId: 'ac8c25b3-fe62-49c1-9678-6a66bb68a6f6' 
  })).data;
}

export default CartHor2;
