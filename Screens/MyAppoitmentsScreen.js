import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "@rneui/base";
import AppointmentList from "../Components/AppoimentsList";

const MyAppoitmentsScreen = () => {
  return (
    <SafeAreaView>
      <AppointmentList />
    </SafeAreaView>
  );
};

export default MyAppoitmentsScreen;
