import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Constant from "react-native";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import RootComponent from "./src/screen/index";

export default function LoginAcc() {
  return (

    <RootComponent />
    
    // <SafeAreaView style={style.container}>
    //   <StatusBar style="light" />
    //   <View style={style.content}>
    //     <View style={style.textWrapper}>
    //       <Text style={style.hiText}>Xin Chào!</Text>
    //       <Text style={style.userText}>Pham Tuan Viet</Text>
    //       <Text style={style.userText}>0399999999</Text>
    //     </View>
    //   </View>

    //   <View style={style.form}>
    //     <View style={style.buttonformLogin}>
    //       <View>
    //        <Icon size={24} color="#929292" name="lock" style={{
    //           position: "absolute",
    //           top: 17,
    //           left: 23,
    //           zIndex: 2,
    //         }}/>

    //        <TextInput 
    //          style={style.inputPassword}
    //          keyboardType="numeric"
    //          maxLength={8}
    //          secureTextEntry={true}
    //          autoFocus={true}
    //          placeholder="Nhập mật khẩu"
    //          placeholderTextColor="#929292"
    //        />
    //       </View>
          
    //      <TouchableOpacity style={style.buttonLogin}>
    //       <Text style={style.buttonLoginText}>ĐĂNG NHẬP</Text>
    //      </TouchableOpacity>
    //     </View>
        
    //     <View style={style.buttonformAction}>
    //      <TouchableOpacity style={style.buttonAction}>
    //       <Text style={style.buttonActionText}>QUÊN MẬT KHẨU</Text>
    //      </TouchableOpacity>
        
    //      <TouchableOpacity style={style.buttonAction}>
    //       <Text style={style.buttonActionText}>THOÁT TÀI KHOẢN</Text>
    //      </TouchableOpacity>
    //     </View>            
    //   </View>

    //   <View style={style.action}></View>
    // </SafeAreaView>
  );
};

const TEXT= {
  color: "#fff",
  textAlign: "center",
};

const style= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0005d",
    paddingTop: Constant.statusBarHeight,
  },
  content: {
    
  },
  textWrapper: {
    
  },
  hiText: {
    ...TEXT,
    fontSize: 25,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 18,
    lineHeight: 30,
  },
  inputPassword: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 25,
    width: 320,
    textAlign: "center",
    fontSize: 25,
  },
  buttonLogin: {
    backgroundColor: "red",
    height: 50,
    marginTop: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 320,
  },
  buttonLoginText: {
    ...TEXT
  },
  buttonformAction: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  buttonformLogin: {
    alignItems: "center",
  },
  buttonActionText: {
    color: "#fff",
  },
  form: {
    marginTop: 20,
  },
});