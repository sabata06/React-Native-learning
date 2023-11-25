import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Information({ title, imageSource, desc }) {
  return (
    <View>
      <Image style={styles.img} source={imageSource} />
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.descText}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
  },
  description:{
    alignItems:"center",
    paddingVertical:20
  },
  title:{
fontSize:30
  },
  descText:{
    fontSize:20
  }
});
