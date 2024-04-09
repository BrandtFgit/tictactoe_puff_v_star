import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/";


export default function HomeScreen({goToScreen}){
    return (
        <SafeAreaView style={styles.body}>
            {/* Title */}
            <Text> Starfish Vs Pufferfish Tic-Tac-Toe </Text>
        
            {/* Menu Buttons */}
            <Pressable onPress={() => goToScreen("GameCPU")}>
                <Text>Play V.S. Computer</Text>
            </Pressable>

            <Pressable onPress={() => goToScreen("Game")}>
                <Text>Play V.S. Player</Text>
            </Pressable>
            
            <Pressable onPress={() => goToScreen("Game")}>
                <Text>About</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: "#E3C88A"
    }
});