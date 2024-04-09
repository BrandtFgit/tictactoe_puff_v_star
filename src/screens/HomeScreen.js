import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/";


export default function HomeScreen({goToScreen, onChangeBG}){
    return (
        <SafeAreaView style={styles.body}>
            <Image source={require(assetDir + "logo.png")}></Image>
            {/* Title */}
            <Text style={styles.title}> Starfish vs Pufferfish</Text>
            <Text style={styles.subtitle}>Age of War</Text>
        
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

            <Pressable  onPress={() => onChangeBG(1)}>
                <Text>Background 1</Text>
            </Pressable>

            <Pressable onPress={() => onChangeBG(2)}>
                <Text>Background 2</Text>
            </Pressable>

            <Pressable onPress={() => onChangeBG(3)}>
                <Text>Background 3</Text>
            </Pressable>

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
    title:{
        fontSize: 35,
        paddingTop: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitle:{
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
    }
});