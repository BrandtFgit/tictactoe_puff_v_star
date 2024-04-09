import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/bg/";


export default function HomeScreen({goToScreen}){
    return (
        <SafeAreaView style={styles.body}>
            
            {/* Title */}
            <Text style={styles.title}> Starfish Vs Pufferfish</Text>
            <Text>Age of War</Text>
        
            {/* Menu Buttons */}
            <Pressable onPress={() => goToScreen("GameCPU")}>
                <Text>Play V.S. Computer</Text>
            </Pressable>

            <Pressable onPress={() => goToScreen("Game")}>
                <Text>Play V.S. Player</Text>
            </Pressable>

            <Pressable onPress={() => goToScreen("About")}>
                <Text>About</Text>
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
        fontSize: 40,
        fontFamily: "",
        textAlign: "center",
    },
});