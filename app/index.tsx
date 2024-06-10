import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link, Tabs } from "expo-router";

const Index = () => {
  return (
    <View className="flex justify-center items-center h-screen">
      <Text className="text-8xl text-green-800 uppercase">Home</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-600">
        Go To Home
      </Link>
    </View>
  );
};

export default Index;
