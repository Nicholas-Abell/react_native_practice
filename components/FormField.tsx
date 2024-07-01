import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

type FormFieldProps = {
  title: string;
  value: string;
  handleChangeText: () => void;
  customStyles?: string;
  keyBoardType?: string;
  placeholder?: string;
};

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  handleChangeText,
  customStyles,
  keyBoardType,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${customStyles}`}>
      <Text className="text-base text-gray-100">{title}</Text>
      <View className="w-full h-16 px-4 bg-gray-800 border-2 border-red-500 rounded-2xl focus:border-orange-500 flex-row justify-center items-center">
        <TextInput
          className="flex-1 text-white font-semibold text-base justify-center"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "password" && !showPassword}
        />
        {title === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 text-white"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
