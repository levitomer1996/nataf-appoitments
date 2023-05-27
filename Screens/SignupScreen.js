import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Input, Text } from "@rneui/base";
import horse_background from "../assets/SigninScreen.png";
import natafServer from "../API/nataf-server";
const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const dto = {
      email,
      password,
      firstName,
      lastName,
    };
    try {
      console.log("here");
      await natafServer.post("auth/signup", dto);
      console.log("there");
      navigation.navigate("Signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/SigninScreen.png")}
      style={styles.backgroundImage}
    >
      <View style={{ flex: 1, padding: 20 }}>
        <Input
          label="שם פרטי"
          placeholder="שם פרטי"
          value={firstName}
          onChangeText={setFirstName}
          inputStyle={styles.input}
          placeholderTextColor="black"
        />
        <Input
          placeholder="שם משפחה"
          value={lastName}
          onChangeText={setLastName}
          inputStyle={styles.input}
          placeholderTextColor="black"
        />
        <Input
          placeholder="אימייל"
          value={email}
          onChangeText={setEmail}
          inputStyle={styles.input}
          placeholderTextColor="black"
        />
        <Input
          placeholder="סיסמה"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          inputStyle={styles.input}
          placeholderTextColor="black"
        />
        <Button
          title="הרשם"
          onPress={handleSignup}
          style={{ marginTop: 20 }}
          buttonStyle={{ backgroundColor: "blue" }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.signupText}>יש לך כבר משתמש ? התחבר עכשיו</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    // Additional styles for the content container
  },
  input: {
    color: "black", // Sets the text color to black
    backgroundColor: "white",
    borderColor: "purple", // Sets the border color to purple
  },
  inputContainer: {
    borderColor: "purple", // Sets the border color to purple
    backgroundColor: "white", // Sets the background color to white
    // Additional styles for the input container
  },
  signupText: {
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
export default SignupScreen;
