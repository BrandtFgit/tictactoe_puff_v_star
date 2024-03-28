import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions} from "react-native"
import React, { useState } from "react"
import Cell from "./src/cell";



const App = () => {
  
  const [activePlayer, setActivePlayer] = useState("Starfish");

  const [markers, setMarkers] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ])

  const markPosition = (position) => {
    let markersTemp = [...markers];
    markersTemp[position] = activePlayer;
    setMarkers(markersTemp);
    if(activePlayer == "Starfish"){
      setActivePlayer("Pufferfish");
    }else{
      setActivePlayer("Starfish");
    }
  }


  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.playerInfo}>
        <Text style={styles.playerTxt}>{activePlayer}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>
        {markers.map((marker, index) => (
          <Cell key={index} marker={marker} onPress={() => markPosition(index)} />
        ))}
      </View>
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
  }
})