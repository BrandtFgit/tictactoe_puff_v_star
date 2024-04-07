import { StyleSheet, Pressable, Image, Dimensions} from "react-native"
//import React, { useState } from "react"

const assetDir = "../assets/img/";
const windowWidth = Dimensions.get("window").width
let directorystar=0;
let directorypuff=0;
const puffMarkerImage = [
    require(assetDir + "pufferfish.png"),
    require(assetDir + "pufferfish-win.png"),
    require(assetDir + "pufferfish-lose.png"),
];
const starMarkerImage = [
    require(assetDir + "starfish.png"),
    require(assetDir + "starfish-win.png"),
    require(assetDir + "starfish-lose.png")
];

export default function Cell({onPress, marker, winner}){
    let icon = null;

    //console.log(marker);
    
    if (marker == "Pufferfish") {
        icon = <Image source={puffMarkerImage[directorypuff]} style={styles.icon}/>
    }
    else if (marker == "Starfish"){
        icon = <Image source={starMarkerImage[directorystar]} style={styles.icon}/>
    }
    setWinner(winner);

    return(
    <Pressable style={styles.cell} onPress={onPress}>
        {icon}
    </Pressable>
    );
}

function setWinner(winner){
    if(winner == "Pufferfish"){
        directorypuff=1;
        directorystar=2;
    }
    else if (winner == "Starfish"){
        directorypuff=2;
        directorystar=1;
    }
    else if (winner == null){
        directorypuff=0;
        directorystar=0;
    }
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