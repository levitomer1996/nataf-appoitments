import AsyncStorage from "@react-native-async-storage/async-storage";

export default async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving token:", error);
  }
};
