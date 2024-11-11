import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const FormFields = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = React.useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#D3D3D3",
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

export default FormFields;
