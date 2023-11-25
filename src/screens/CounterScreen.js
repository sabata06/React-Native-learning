import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="arttır"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="azalt"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Sayı:{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
