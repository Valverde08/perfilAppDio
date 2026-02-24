import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
}
