import { ListItem } from "@rneui/base";
import React from "react";
import { View, FlatList, Text } from "react-native";

const appointments = [
  { id: 1, time: "09:00 AM", date: "2023-05-27", day: "Monday" },
  { id: 2, time: "02:30 PM", date: "2023-05-28", day: "Tuesday" },
  { id: 3, time: "11:15 AM", date: "2023-05-29", day: "Wednesday" },
  // Add more appointment objects as needed
];

const AppointmentList = () => {
  const renderAppointment = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.time}</ListItem.Title>
        <ListItem.Subtitle>
          {item.date} ({item.day})
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <FlatList
        data={appointments}
        renderItem={renderAppointment}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default AppointmentList;
