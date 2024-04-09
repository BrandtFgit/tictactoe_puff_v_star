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
    },
    logocontainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo:{
        width: windowWidth,
        height: windowHeight/3,
    }
});