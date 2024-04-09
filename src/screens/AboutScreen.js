import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/";


export default function AboutScreen({goToScreen}){
    return (
        <SafeAreaView style={styles.body}>
            <Text>Starfish VS Pufferfish Tic-Tac-Toe</Text>
            <Text>By:</Text>
            <Text>Brandt Fowler - Lead Programmer, Lead Artist</Text>
            <Text>Andrew Reimert</Text>
            <Text>Adam McDougal</Text>
            <Text>Rhianna Smith</Text>
            {/* Back To Menu Button */}
            <Pressable style = {styles.backButton} onPress={() => goToScreen("Home")}>
                <Image source={require(assetDir + "back.png")} style={styles.cancelIcon} />
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
    },
    backButton:{
        position: 'absolute',
        bottom:0,
        left:0,
    },
    cancelIcon:{
      width: 100,
      height: 100
    },
});