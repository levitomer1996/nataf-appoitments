import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import CalendarComponent from "../Components/Calendar/CalendarComponent";
import Spinner from "../Components/Spinner";

const AppoitmentsScreen = () => {
  return (
    <SafeAreaView>
      <CalendarComponent />
      <Spinner />
    </SafeAreaView>
  );
};

export default AppoitmentsScreen;
