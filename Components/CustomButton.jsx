import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({
  handlePress,
  title,
  styles,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[customStyles.button, styles]} // Merging custom styles with default styles
      activeOpacity={0.7}
      className={`${containerStyles} ${isLoading ? "opacity-50" : ""}`}
    >
      <Text style={customStyles.buttonText} className={`${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const customStyles = StyleSheet.create({
  button: {
    backgroundColor: "#FF9C01",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    paddingVertical: 10, // Use paddingVertical for better responsiveness
    paddingHorizontal: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
});

export default CustomButton;
