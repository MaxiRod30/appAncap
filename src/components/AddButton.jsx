import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const AddButton = ({
    title = "",
    onPress = () => {},
}) => {
    return (
        <Pressable
            style={{ ...styles.button }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 1,
        backgroundColor: colors.skyBlue,
        marginTop: 20,
        justifyContent: "center",
        padding: 10,
        borderRadius: 6,
        alignItems: "center",
        padding: 8
    },
    text: {
        color: colors.white,
        fontSize: 18,
    },
});
