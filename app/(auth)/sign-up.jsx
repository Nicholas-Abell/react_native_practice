import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setIsLoading] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10">
            Sign Up to Aora
          </Text>
          <FormField
            title="username"
            value={form.username}
            handleChangeText={(e) => {
              setForm({ ...form, username: e });
            }}
            customStyles="mt-10"
            placeholder="username"
          />
          <FormField
            title="email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
            customStyles="mt-7"
            keyBoardType="email-address"
            placeholder="email"
          />
          <FormField
            title="password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            customStyles="mt-7"
            placeholder="password"
          />
        </View>
        <CustomButton
          title="Sign In"
          handlePress={() => {}}
          containerStyles="mt-7"
          isLoading={loading}
        />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-gray-100 text-lg">
            Already have an account?
          </Text>
          <Link className="text-lg text-blue-500" href="/sign-in">
            Sign In
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
