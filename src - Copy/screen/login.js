import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, StatusBar, Dimensions, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default Login = ({navigation}) => {
    const [getPasswordvisible, setPasswordvisible] = useState(false);
    const [getEmail, setEmail] = useState("");
    return(
        <ImageBackground style={{height: "100%", width: "100%"}} source={require("../images/backgroundlogin.jpg")} resizeMode="stretch">
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{flex: 1}}>
                <View style={{height: "100%", width: "100%"}}>
                    {/* Email & password */}
                    <View style={{height: "20%", width: "100%", marginTop: 0.3*windowHeight, alignItems: "center"}}>
                        {/* Email */}
                        <View style={{width: "70%", height: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <Text style={{color: "white"}}>Email</Text>
                            <TextInput style={{
                                color: "white",
                                height: "100%",
                                width: "70%",
                                borderBottomColor: "white",
                                borderBottomWidth: 1,
                                textAlign: "left",
                            }}
                                autoCapitalize="none"
                                value={getEmail}
                                onChangeText={setEmail}  
                            />
                        </View>
                        {/* Password */}
                        <View style={{width: "70%", height: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10}}>
                            <Text style={{color: "white"}}>Password</Text>
                            <TextInput style={{
                                color: "white",
                                height: "100%",
                                width: "70%",
                                borderBottomColor: "white",
                                borderBottomWidth: 1,
                                textAlign: "left",
                                paddingRight: 30,
                            }}
                                autoCapitalize="none"
                                secureTextEntry={getPasswordvisible? false: true}   
                            />
                            <TouchableOpacity style={{
                                position: "absolute",
                                top: 5,
                                left: 230,
                                zIndex: 2,
                            }}
                                onPress={() => {
                                    setPasswordvisible(!getPasswordvisible)
                                }}
                            >
                                {getPasswordvisible?
                                <Icon size={21} color="white" name="eye" style={{height: "100%", width: "100%"}} />
                                :
                                <Icon size={21} color="white" name="eye-off" style={{height: "100%", width: "100%"}} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Button login & register */}
                    <View style={{height: "20%", width: "100%", marginTop: 0.15*windowHeight, justifyContent: "center", alignItems: "center"}}>
                            {/* Dang nhap */}
                            <TouchableOpacity
                                style={{height: "30%", width: "60%", borderColor: "white", borderWidth: 1, borderRadius: 100, backgroundColor: "#fff", justifyContent: "center", alignItems: "center"}}
                                onPress={() => {
                                    navigation.navigate("Home", {
                                        email: getEmail
                                    });
                                }}
                            >
                                <Text style={{color: "black", fontSize: 20}}>????NG NH???P</Text>
                            </TouchableOpacity>
                            {/* Dang ky */}
                            <TouchableOpacity style={{marginTop: 20, height: "30%", width: "60%", borderColor: "white", borderWidth: 1, borderRadius: 100, backgroundColor: "#fff", justifyContent: "center", alignItems: "center"}}>
                                <Text style={{color: "black", fontSize: 20}}>????NG K??</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}