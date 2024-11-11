import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormFields from "../../Components/FormFields";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-primary">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{ width: 115, height: 35, marginTop: 20 }}
        />
        {console.log(form)}
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontWeight: "600",
            marginTop: 20,
          }}
        >
          Log In to Aora
        </Text>

        <FormFields
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
          placeholder={"Enter your Email"}
        />
        <FormFields
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          placeholder={"Enter your Password"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
