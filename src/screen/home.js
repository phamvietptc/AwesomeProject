import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Home = ({route, navigation}) => {
    const {email} = route.params;
    return (
        <SafeAreaView style={{flex: 1}}>
            {/* Header */}
            <View style={{height: "8%", width: "100%", borderWidth: 1, flexDirection: "row"}}>
                <TouchableOpacity
                    style={{height: "100%", aspectRatio: 1.7, borderWidth: 1, alignItems: "center"}}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Icon size={24} color="black" name="caretleft" />
                    <Text style={{fontSize: 20, fontWeight: "500", marginLeft: 10}}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{height: "100%", aspectRatio: 1.7, borderWidth: 1, alignItems: "center"}}
                    onPress={() => {
                        navigation.navigate("Setting")
                    }}
                >
                    <Icon size={24} color="black" name="setting" />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{fontSize: 30}}>Home screen</Text>
                <Text style={{fontSize: 20}}>Email: <Text>{email}</Text></Text>
            </View>
        </SafeAreaView>
    );
}