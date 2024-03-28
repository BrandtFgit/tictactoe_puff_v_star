import { StyleSheet, Pressable, Image, Dimensions} from "react-native"
//import React, { useState } from "react"

const assetDir = "../assets/img/programmer_art/";
const windowWidth = Dimensions.get("window").width

const markerImages = [
    require(assetDir + "pufferfish.png"),
    require(assetDir + "starfish.png")
];

export default function Cell({onPress, marker}){
    let icon = null;

    //console.log(marker);
    
    if (marker == "Pufferfish") {
        icon = <Image source={markerImages[0]} style={styles.icon}/>
    }
    else if (marker == "Starfish"){
        icon = <Image source={markerImages[1]} style={styles.icon}/>
    }

    return(
    <Pressable style={styles.cell} onPress={onPress}>
        {icon}
    </Pressable>
    );
}

const styles = StyleSheet.create({
    cell:{
        width:windowWidth/3.2,
        height:windowWidth/3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6
        },
        icon:{
        height:100,
        width:100
        }
});