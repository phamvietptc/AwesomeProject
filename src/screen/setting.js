import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Setting = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: "8%", width: "100%", borderWidth: 1, flexDirection: "row"}}>
                <TouchableOpacity
                    style={{height: "100%", aspectRatio: 1.7, borderWidth: 1, alignItems: "center"}}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Icon size={24} color="black" name="caretleft" />
                    <Text style={{fontSize: 15, fontWeight: "500", marginLeft: 5}}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize: 30}}>Setting</Text>
                <TouchableOpacity
                    style={{width: "50%", height: 50, borderWidth: 1, marginTop: 50, alignItems: "center", justifyContent: "center"}}
                    onPress={() => {
                        navigation.popToTop()
                    }}
                >
                    <Text style={{fontSize: 25, fontWeight: "500"}}>Logout</Text>   
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}