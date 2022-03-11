import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Setting = ({navigation}) => {
    return (
        <ImageBackground style={{height: "100%", width: "100%"}} source={require("../images/backgroundsetting.jpg")} resizeMode="stretch">
            <SafeAreaView style={{flex: 1}}>
                <View style={{height: "8%", width: "100%", flexDirection: "row"}}>
                    <TouchableOpacity
                        style={{height: "100%", aspectRatio: 1.7, borderWidth: 1,borderColor: "white", alignItems: "center"}}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Icon size={24} color="white" name="caretleft" />
                        <Text style={{color: "white", fontSize: 15, fontWeight: "500", marginLeft: 5}}>Back</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "white", fontSize: 30, marginTop: 170}}>Setting</Text>
                    <TouchableOpacity
                        style={{width: "50%", height: 50, borderWidth: 1,borderColor: "white", borderRadius: 100, marginTop: 30, alignItems: "center", justifyContent: "center"}}
                        onPress={() => {
                            navigation.popToTop()
                        }}
                    >
                        <Text style={{color: "white", fontSize: 25, fontWeight: "500"}}>Logout</Text>   
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}