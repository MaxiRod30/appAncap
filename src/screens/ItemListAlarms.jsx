import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import { colors } from '../global/colors.js'

import alarmas from '../data/alarmas.json'
import Search from '../components/Search.jsx';
import AlarmItem from '../components/AlarmItem.jsx';


const ItemListAlarms = ({navigation}, { setTurnoSelected = () => { } } ) => {
  const [keyWord, setKeyword] = useState('')
  const [turnoFiltered, setTurnoFiltered] = useState([])
  const [error, setError] = useState("")


  useEffect(() => {
    setError("")
    if (keyWord === "") {
      setError("No hay turno selecionado!")
      return
    }

    const alarmasFilter = alarmas.filter(
      (alarma) => alarma.turno === keyWord
    )

    setTurnoFiltered(alarmasFilter)

  }, [keyWord])

  return (
    <View style={styles.flatListContainer}>

      <Search onSearch={setKeyword} goBack={() => setTurnoSelected('')} />
      <Text>{error}</Text>
      <FlatList
        data={turnoFiltered}
        renderItem={({ item }) => <AlarmItem key={"item.id"}
          uid={"123"}
          onChange={async active => {
            if (active) {
              await enableAlarm("item.id");
            } else {
              await disableAlarm("item.uid");
            }
          }}
          onPress={() => { }}
          title={"alarma"}
          hour={12}
          minutes={50}
          isActive={true}
        />}
        keyExtractor={(item) => item.id}
      />

      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
};

export default ItemListAlarms

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.green300,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
});