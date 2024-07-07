
import React from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../global/colors';

export default function ({
  uid,
  title,
  hour,
  minutes,
  onPress,
  isActive,
  onChange,
}) {
  return (
    <TouchableOpacity onPress={() => onPress(uid)} style={styles.container}>
      <View style={styles.leftInnerContainer}>
        <Text style={styles.clock}>
          {hour < 10 ? '0' + hour : hour}:
          {minutes < 10 ? '0' + minutes : minutes}
        </Text>
      </View>
      <View style={styles.rightInnerContainer}>
        <Switch
          ios_backgroundColor={'black'}
          trackColor={{false: colors.GREY, true: colors.BLUE}}
          value={isActive}
          onValueChange={onChange}
        />
      </View>
    </TouchableOpacity>
  );
}


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
});