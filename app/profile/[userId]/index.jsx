import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Profilex = () => {
  const params = useLocalSearchParams();
  
  return (
    <View className="flex justify-center items-center h-screen">
      <Text className="text-red-400 text-8xl">{params.userId}</Text>
    </View>
  );
};

export default Profilex;