import React, { Component } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Home = ({route, navigation}) => {
    const {email} = route.params;
    return (
        <ImageBackground style={{height: "100%", width: "100%"}} source={require("../images/backgroundhome.jpg")} resizeMode="stretch">
            <SafeAreaView style={{flex: 1}}>
                {/* Header */}
                <View style={{height: "8%", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <TouchableOpacity
                        style={{height: "100%", aspectRatio: 1.7, borderWidth: 1, alignItems: "center"}}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Icon size={24} color="black" name="caretleft" />
                        <Text style={{fontSize: 15, fontWeight: "500", marginLeft: 5}}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{height: "100%", aspectRatio: 1.7, borderWidth: 1, alignItems: "center"}}
                        onPress={() => {
                            navigation.navigate("Setting")
                        }}
                    >
                        <Icon size={24} color="black" name="setting" />
                        <Text style={{fontSize: 15, fontWeight: "500", marginLeft: 5}}>Setting</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 30}}>Home screen</Text>
                    <Text style={{fontSize: 20}}>Email: <Text>{email}</Text></Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}