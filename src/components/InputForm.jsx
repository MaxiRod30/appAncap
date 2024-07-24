import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors"; 

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  subtitle: {
    width: "90%",
    fontSize: 16,
    fontFamily: "Josefin",
  },
  error: {
    paddintTop: 2,
    fontSize: 16,
    color: "red",
    fontFamily: "Josefin",
    fontStyle: "italic",
  },
  input: {
    width: "90%",
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderColor: colors.green700,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Josefin",
    backgroundColor: colors.fontGrey,
    fontSize: 14,
  },
});
