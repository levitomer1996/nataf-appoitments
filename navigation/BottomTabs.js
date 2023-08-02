import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
<MaterialCommunityIcons name="horse-human" size={24} color="black" />;

import AppoitmentsScreen from "../Screens/AppoitmentsScreen";
import MyAppoitmentsScreen from "../Screens/MyAppoitmentsScreen";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import AdminScreen from "../Screens/AdminScreen";
const Tab = createMaterialBottomTabNavigator();
const renderAdminTab = (isAdmin) => {
  if (isAdmin)
    return (
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
    );
};
const BottomTabs = () => {
  const { state } = useContext(AuthContext);

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
        name="admin"
        component={AdminScreen}
        options={{
          tabBarLabel: "ניהול",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color="black" />
          ),
        }}
      />
      {renderAdminTab(state.user.role == "ADMIN")}
    </Tab.Navigator>
  );
};
export default BottomTabs;
