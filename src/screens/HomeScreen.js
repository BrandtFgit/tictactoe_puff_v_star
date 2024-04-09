import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/";


export default function HomeScreen({goToScreen}){
    return (
        <SafeAreaView style={styles.body}>
            <Text> Starfish Vs Pufferfish Tic-Tac-Toe </Text>
        <Pressable onPress={() => goToScreen("Game")}>
            <Text>Play Game</Text>
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