import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React, { FC } from "react";

import Icons from "@/constants/Icons";

interface TabIconProps {
  icon: ImageSourcePropType;
  name?: string;
  color?: string;
  focused?: boolean;
}

const TabIcon: FC<TabIconProps> = ({ icon, name, color, focused }) => {
  return (
    <View
      className={`text-${color} flex flex-col justify-center items-center gap-2`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-semibold" : "font-normal"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Icons.home}
                name="Home"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Icons.profile}
                name="Profile"
                color="blue-400"
                focused
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Icons.bookmark}
                name="Bookmark"
                color="blue-400"
                focused
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Icons.plus}
                name="Create"
                color="blue-400"
                focused
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
