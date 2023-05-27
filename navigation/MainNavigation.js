import React, { useContext, useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../Screens/SignupScreen";
import SignInScreen from "../Screens/SigninScreen";
import { AuthContext } from "../Context/AuthContext";
import BottomTabs from "./BottomTabs";
import natafServer from "../API/nataf-server";
import getToken from "../helpers/getToken";
import Spinner from "../Components/Spinner";

const Stack = createStackNavigator();

export default function MainNavigation() {
  const { state, login, logout } = useContext(AuthContext);
  const { isLogged } = state;
  const [init, setInit] = useState(false);
  const initSignin = async () => {
    try {
      const token = await getToken();
      const res = await natafServer.get("auth/tokensignin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      login(res.data);
      setInit(true);
    } catch (error) {
      console.error("Error occurred during the GET request:", error);
      logout();
    }
  };

  useEffect(() => {
    initSignin();
  }, []);
  if (init) {
    return (
      <Stack.Navigator>
        {isLogged ? (
          <Stack.Screen
            name="tab"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="signin"
              component={SignInScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="signup"
              component={SignupScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    );
  } else {
    return <Spinner />;
  }
}
