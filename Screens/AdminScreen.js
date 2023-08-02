import { Text } from "@rneui/base";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import natafServer from "../API/nataf-server";
import getToken from "../helpers/getToken";

const AdminScreen = () => {
  async function t() {
    try {
      const bearerToken = await getToken();
      const data = await natafServer.get("/auth", {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    t();
  });
  return (
    <SafeAreaView>
      <Text>ADmin</Text>
    </SafeAreaView>
  );
};

export default AdminScreen;
