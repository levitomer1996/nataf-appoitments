import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
<MaterialCommunityIcons name="horse-human" size={24} color="black" />;

import AppoitmentsScreen from "../Screens/AppoitmentsScreen";
import MyAppoitmentsScreen from "../Screens/MyAppoitmentsScreen";
const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="appoitment"
        component={AppoitmentsScreen}
        options={{
          tabBarLabel: "שיעורים זמינים",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="horse-human"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="myappoitment"
        component={MyAppoitmentsScreen}
        options={{
          tabBarLabel: "השיעורים שלי",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
