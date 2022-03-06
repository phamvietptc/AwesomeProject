import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, StatusBar, Dimensions, TextInput } from "react-native";

export default Home = ({ route, navigation }) => {
    const { email } = route.params;
    return (
        <SafeAreaView>
            {/* Header */}
            <View>
                <TouchableOpacity>
                    <Image></Image>
                    <Text></Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image></Image>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}