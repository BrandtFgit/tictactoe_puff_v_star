import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/";


export default function AboutScreen({goToScreen}){
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.infocontainer}>
            <Text style={styles.title}>The Tale of War</Text>
            <Text>In the endless depths of the ocean, a bitter feud ensues between the starfish and the pufferfish. What began as a clash over territory has evolved into a relentless war, shaping the undersea landscape for generations. Despite the vastness of the ocean, both sides are locked in a ceaseless struggle for dominance. Whispers of a prophecy speak of a chosen one who will turn the tide leading one side to victory, but which one?</Text>
            <Text>Starfish VS Pufferfish Age of War</Text>
            <Text>By:</Text>
            <Text>Brandt Fowler - Lead Programmer, Lead Artist</Text>
            <Text>Andrew Reimert</Text>
            <Text>Adam McDougal</Text>
            <Text>Rhianna Smith</Text>
            
            {/* Back To Menu Button */}
            <Pressable style = {styles.backButton} onPress={() => goToScreen("Home")}>
                <Image source={require(assetDir + "back.png")} style={styles.cancelIcon} />
            </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: "center",
    },
    backButton:{
        position: 'absolute',
        bottom:0,
        left:0,
    },
    cancelIcon:{
      width: 50,
      height: 50,
      margin: 10,
    },
    infocontainer:{
        flex: 1,
        width: 350,
        backgroundColor: "#c9a053",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
        borderColor: "#644D3E",
        borderWidth: 3,
    },
    title:{
        fontSize: 35,
        paddingTop: 35,
        fontWeight: "bold",
    },
});