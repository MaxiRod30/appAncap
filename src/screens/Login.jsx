import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/colors";

import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";

import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../fetures/User/UserSlice";
import { truncateSessionTable } from '../persistence';
import { insertSession } from "../persistence";

const Login = ({ navigation }) => {

  const defaultFondo = "../../assets/background.png";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch()
  const [triggerSignIn, result] = useSignInMutation()

  const cleanDb = async () => {
    try {
      const response = await truncateSessionTable()
      console.log(response)
      dispatch(clearUser())
    } catch (error) {
      console.log({errorSignOutDB: error})
    }
  }

  useEffect(() => {

    if (result?.data && result.isSuccess) {
      
      cleanDb()
      
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken
      }).then((response) => {
        dispatch(
          setUser({
            email: result.data.email,
            idToken: result.data.idToken,
            localId: result.data.localId,
          })
        );
      }).catch(err => {
        console.log(err)
      })
    }
  }, [result])

  const onSubmit = () => {
    triggerSignIn({ email, password, returnSecureToken: true })
  }

  return (
    <View style={styles.main} >
      <Image source={require(defaultFondo)} style={styles.img} />

      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <InputForm label={"Email"} onChange={setEmail} error={email? "" : "Escriba su email!"} />
        <InputForm
          label={"Password"}
          onChange={setPassword}
          error={ password ? "" : "Escriba su password!"}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Continue" />
        <Text style={styles.sub}>Not have an account?</Text>

        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    fontStyle: "bold",
    color: colors.white,
  },
  sub: {
    fontSize: 14,
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
});
