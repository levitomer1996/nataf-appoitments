import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./Context/AuthContext";
import { I18nManager } from "react-native";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    I18nManager.forceRTL(true);
  }, []);
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
