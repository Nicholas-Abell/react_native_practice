import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, headerTitle: "Home" }} />
      <Stack.Screen name="profile/index"  options={{ headerShown: true, headerTitle: "Profile" }} />
      <Stack.Screen name="profile/[userId]/index"  options={{ headerShown: true, headerTitle: "Profile number" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
