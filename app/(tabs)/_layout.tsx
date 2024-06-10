import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React, { FC } from "react";

interface TabIconProps {
  icon: string;
  name: string;
  color: string;
  focus: boolean;
}

const TabIcon: FC<TabIconProps> = ({ icon, name, color, focus }) => {
  return (
    <View>
      <Image />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={""} name="" color="" focus />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
