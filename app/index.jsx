import { Image, ScrollView, Text, View } from "react-native";
import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { Link, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import {images} from "../constants";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}></ScrollView>
      <View className="w-full justify-center items-center h-full px-4">
      <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
        <Image
          source={images.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode="contain"
        />
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
