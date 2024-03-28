import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import React, { useState } from "react"
import Cell from "./src/cell";

const assetDir = "./assets/img/programmer_art/";

const emptyMarkers = [
  "", "", "",
  "", "", "",
  "", "", ""
]

const App = () => {

  const [activePlayer, setActivePlayer] = useState("Starfish");

  const [markers, setMarkers] = useState(emptyMarkers)

  const markPosition = (position) => {
    // Check if cell is null
    if(markers[position]) return;

    // Set Cell
    let markersTemp = [...markers];
    markersTemp[position] = activePlayer;
    setMarkers(markersTemp);

    // Swap Player
    if(activePlayer == "Starfish"){
      setActivePlayer("Pufferfish");
    }else{
      setActivePlayer("Starfish");
    }
  }

  const resetMarkers = () => {
    setMarkers(emptyMarkers);
  }

  return (
    <SafeAreaView style={styles.body}>

      {/* Turn Info */}
      <View style={styles.playerInfo}>
        <Text style={styles.playerTxt}>{activePlayer}'s turn</Text>
      </View>

      {/* Cells */}
      <View style={styles.mainContainer}>
        {markers.map((marker, index) => (
          <Cell key={index} marker={marker} onPress={() => markPosition(index)} />
        ))}
      </View>

      {/* Reset Button */}
      <Pressable style = {styles.resetButton} onPress={resetMarkers}>
          <Image source={require(assetDir + "replay.png")} style={styles.cancelIcon} />
      </Pressable>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: "#fff"
  },
  playerInfo:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  playerTxt:{
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1.2
  },
  mainContainer:{
    flexDirection:'row',
    justifyContent:"center",
    flexWrap: "wrap"
  },
  resetButton:{
    position: 'absolute',
    bottom: 0,
    right:0
  },
  cancelIcon:{
    width: 100,
    height: 100
  }
})