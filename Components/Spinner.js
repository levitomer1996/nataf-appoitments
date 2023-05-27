import React from "react";
import { View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

export default function Spinner() {
  return (
    <View style={styles.container}>
      <Progress.Circle size={30} indeterminate={true} color="#1E90FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
