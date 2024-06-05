import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="flex justify-center items-center h-screen">
      <Text className="text-8xl text-green-800 uppercase">Home</Text>
      <StatusBar style="auto" />
      <Link href="/profile/1" className="text-blue-600">
        Go To Profile
      </Link>
    </View>
  );
};

export default Index;
