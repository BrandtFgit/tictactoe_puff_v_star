import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/bg/";


export default function HomeScreen({goToScreen, onChangeBG}){
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

            <Pressable onPress={() => goToScreen("About")}>
                <Text>About</Text>
            </Pressable>

            <Pressable onPress={() => onChangeBG(1)}>
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
    }
});