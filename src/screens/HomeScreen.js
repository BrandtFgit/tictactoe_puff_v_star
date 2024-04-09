import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/";

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

export default function HomeScreen({goToScreen, onChangeBG}){
    return (
        <SafeAreaView style={styles.body}>
            {/* Logo  Image */}
            <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require(assetDir + "logo.png")}></Image>
            </View>
                    
            {/* Menu Buttons */}
            <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => goToScreen("GameCPU")}>
                <Text style={styles.buttonTxt}>Play V.S. Computer</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goToScreen("Game")}>
                <Text style={styles.buttonTxt}>Play V.S. Player</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goToScreen("About")}>
                <Text style={styles.buttonTxt}>About</Text>
            </Pressable>
            </View>

            {/* Background Buttons */}
            <Text style={styles.subtitle}>Choose Background</Text>
            <View style={styles.backgroundbuttcontainer}>
                <Pressable  onPress={() => onChangeBG(1)}>
                    <Image style={styles.image} source={require(assetDir + "bg/bg1.png")}></Image>
                </Pressable>

                <Pressable onPress={() => onChangeBG(2)}>
                    <Image style={styles.image} source={require(assetDir + "bg/bg2.png")}></Image>
                </Pressable>

                <Pressable onPress={() => onChangeBG(3)}>
                    <Image style={styles.image} source={require(assetDir + "bg/bg3.png")}></Image>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
    },
    backgroundImage:{
        position:"absolute",
    },
    subtitle:{
        padding: 10,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    buttonContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        width: 200,
        height: 50,
        backgroundColor: "#a87f32",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
        borderColor: "#644D3E",
        borderWidth: 2,
    },
    buttonTxt:{
        fontSize: 20,
        color: "white",
    },
    logocontainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo:{
        width: windowWidth,
        height: windowHeight/3,
    },
    image:{
        width: 100,
        height: "80%",
        borderColor: "#644D3E",
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
    },
    backgroundbuttcontainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
});