import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Constant from "react-native";
import { StatusBar } from "react-native";

export default function LoginAcc() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="light" />
      <View style={style.content}>
        <View style={style.textWrapper}>
          <Text style={style.hiText}>Xin Chào!</Text>
          <Text style={style.userText}>Pham Tuan Viet</Text>
          <Text style={style.userText}>0000000000</Text>
        </View>
      </View>

      <View style={style.form}>
        <TextInput style={style.inputPassword} />

        <TouchableOpacity style={style.buttonLogin}>
          <Text style={style.buttonLoginText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonAction}>
          <Text style={style.buttonActionText}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonAction}>
          <Text style={style.buttonActionText}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>
      </View>

      <View style={style.action}></View>
    </SafeAreaView>
  );
};

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
  inputPassword: {
    height: 60,
    backgroundColor: "#fff",
  },
  buttonLogin: {
    backgroundColor: "red",
    height: 50,
    marginTop: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLoginText: {
    ...TEXT
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});