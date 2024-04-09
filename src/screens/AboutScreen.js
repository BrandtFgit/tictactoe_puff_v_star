import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/";
const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height


export default function AboutScreen({goToScreen}){
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.infocontainer}>
            <Text style={styles.title}>The Tale of War</Text>
            <Text style={styles.text}>In the endless depths of the ocean, a bitter feud ensues between the starfish and the pufferfish. What began as a clash over territory has evolved into a relentless war, shaping the undersea landscape for generations. Despite the vastness of the ocean, both sides are locked in a ceaseless struggle for dominance. Whispers of a prophecy speak of a chosen one who will turn the tide leading one side to victory, but which one?</Text>

            <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require(assetDir + "logo.png")}></Image>
            </View>

            <View style={styles.logocontainer}>
            <Text style={styles.subtitle}>Credits:</Text>
            <Text>Starfish VS Pufferfish: Age of War</Text>
            <Text>Brandt Fowler - Lead Programmer, Lead Artist</Text>
            <Text>Andrew Reimert - Lead Design, Assistant Artist</Text>
            <Text>Adam McDougal</Text>
            <Text>Rhianna Smith</Text>
            </View>

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
        alignItems: "center",
        justifyContent: "center",
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
    text:{
        textAlign: "center",
        fontSize: 15,
        padding: 10,
    },
    subtitle:{
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    logocontainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo:{
        width: windowWidth/1.20,
        height: windowHeight/3,
    },
    credits:{
        fontSize: 15,
        textAlign: "center",
    }
});