import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Profile = ({navigation}) => {
    return (
        <ImageBackground style={{height: "100%", width: "100%"}} source={require("../images/backgroundprofile.jpg")} resizeMode="stretch">
            <SafeAreaView style={{flex: 1}}>
                <View style={{height: "8%", width: "100%", flexDirection: "row"}}>
                    <TouchableOpacity
                        style={{height: "100%", aspectRatio: 1.7, borderWidth: 1,borderColor: "black", alignItems: "center"}}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Icon size={24} color="black" name="caretleft" />
                        <Text style={{color: "black", fontSize: 15, fontWeight: "500", marginLeft: 5}}>Back</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "black", fontSize: 30, marginTop: 170}}>Profile</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}