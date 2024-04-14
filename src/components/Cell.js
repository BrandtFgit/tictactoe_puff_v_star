import { StyleSheet, Pressable, Image, Dimensions} from "react-native"
import React, { useState, useEffect } from 'react';

const assetDir = "../../assets/img/";
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

export default function Cell({ onPress, marker, winner }) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        setIcon(newIcon);
    }, [marker, directorypuff, directorystar, winner]); 

        let newIcon = null;

        if (marker === "Pufferfish") {
            newIcon = <Image source={puffMarkerImage[directorypuff]} style={styles.icon}/>
        }
        else if (marker === "Starfish"){
            newIcon = <Image source={starMarkerImage[directorystar]} style={styles.icon}/>
        }

    setWinner(winner);

    return(
        <Pressable style={styles.cell} onPress={onPress}>
            {icon}
        </Pressable>
    );
}

function setWinner(winner){
    switch(winner){
        case "Pufferfish":
            directorypuff=1;
            directorystar=2;
            break;
        case "Starfish":
            directorypuff=2;
            directorystar=1;
            break;
        case "Tie":
            directorypuff=2;
            directorystar=2;
            break;
        case null:
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
        },
    icon:{
        height:100,
        width:100
    }
});