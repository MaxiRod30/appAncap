import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=> [styles.btn, {opacity: pressed ? 0.6 : 1}]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.skyBlue,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "80%",
    marginTop: 30,
  },
  text: {
    color: colors.white,
    fontSize: 22,
  },
});
