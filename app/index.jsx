import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="flex justify-center items-center h-s">
      <Text className="text-4xl text-green-800">Index</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-blue-600">
        Go To Profile
      </Link>
    </View>
  );
};

export default Index;
