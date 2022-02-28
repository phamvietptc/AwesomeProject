import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function LoginAcc() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <View style={style.textWrapper}>
          <Text style={style.hiText}>Xin Chào!</Text>
          <Text style={style.userText}>Pham Tuan Viet</Text>
          <Text style={style.userText}>0000000000</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const TEXT= {
  color: "#fff",
  textAlign: "center",
};

const style= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    paddingTop: Constant.statusBarHeight,
  },
  content: {

  },
  textWrapper: {

  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
});