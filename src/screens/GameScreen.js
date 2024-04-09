import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import { useState } from "react";
import Cell from "../components/Cell";
const assetDir = "../../assets/img/";
const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
const emptyMarkers = [
    "", "", "",
    "", "", "",
    "", "", ""
]

let gameStatus = "";

export default function GameScreen(){

    const [winner, setWinner] = useState(null);

    const [activePlayer, setActivePlayer] = useState("Starfish");

    const [markers, setMarkers] = useState(emptyMarkers)

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    const checkWinner = (marks) => {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            // Check if someone has 3 in a row
            if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
                return marks[a]; //Return winner
            }
        }
        // Tie
        // Check for a tie
        if (!marks.includes("")) {
            return "Tie";
        }
        // Next Turn
        return null;
    };

    const markPosition = (position) => {
        if(winner != null) return;
        // Check if cell is null
        if(markers[position]) return;

        // Set Cell
        let markersTemp = [...markers];
        markersTemp[position] = activePlayer;
        
        setMarkers(markersTemp);
        setWinner(checkWinner(markersTemp));
        // Swap Player
        if(activePlayer == "Starfish"){
        setActivePlayer("Pufferfish");
        }else{
        setActivePlayer("Starfish");
        }
    }

    switch(winner){
        case "Pufferfish":
        case "Starfish":
            gameStatus = `${winner}'s Wins!`
            alert(gameStatus);
            break;
        case "Tie":
            gameStatus = `It's A tie!`
            alert(gameStatus);
            break;
        
        case null:
            gameStatus = `${activePlayer}'s turn`
    }
    

    const resetMarkers = () => {
        setMarkers(emptyMarkers);
        setWinner(null);
    }
    return (
        <SafeAreaView style={styles.body}>


            {/* Turn Info */}
            <View style={styles.playerInfo}>
                <Text style={styles.playerTxt}>{gameStatus}</Text>
            </View>
            
            {/* Cells */}
            <View style={styles.mainContainer}>
                <Image style={styles.board} source={require(assetDir + "board.png")}></Image>
                {markers.map((marker, index) => (
                <Cell key={index} marker={marker} winner={winner} onPress={() => markPosition(index)} />
                ))}
            </View>

            {/* Reset Button */}
            <Pressable style = {styles.resetButton} onPress={resetMarkers}>
                <Image source={require(assetDir + "replay.png")} style={styles.cancelIcon} />
            </Pressable>

            {/* Back To Menu Button */}
            <Pressable style = {styles.backButton} onPress={resetMarkers}>
                <Image source={require(assetDir + "back.png")} style={styles.cancelIcon} />
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: "#E3C88A"
    },
    playerInfo:{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: 50
    },
    playerTxt:{
      fontSize: 20,
      fontWeight: "700",
      letterSpacing: 1.2
    },
    mainContainer:{
      flexDirection:'row',
      justifyContent:"center",
      flexWrap: "wrap",
      top:"30%"
    },
    resetButton:{
      position: 'absolute',
      bottom: 0,
      right:0
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
    board:{
        position: "absolute",
        justifyContent:"center",
        width:windowWidth,
        height:windowWidth,
        top:-15,
    }
  })