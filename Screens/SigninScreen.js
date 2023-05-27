import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Input, Button, Text } from "@rneui/base";
import natafServer from "../API/nataf-server";
import { AuthContext } from "../Context/AuthContext";
import setStorage from "../helpers/setStorage";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      const res = await natafServer.post("auth/signin", { email, password });

      await setStorage("token", res.data.token);

      login(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/SigninScreen.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Input
          label="אימייל"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          label="סיסמה"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Sign In"
          onPress={handleSignIn}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupText}>אין לך משתמש? הרשם</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "blue",
  },
  signupText: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontSize: 16,
  },
});

export default SignInScreen;
