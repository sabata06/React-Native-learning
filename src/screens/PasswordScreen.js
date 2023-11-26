import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.main}>
      <Text>Şifrenizi Giriniz:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => setPassword(newValue)}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {password.length < 6 ? (<Text>Şifre En az 6 karakter olmalıdır</Text>): null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
});
