import React, { useState } from "react"
import { StyleSheet, View, Dimensions, Image} from "react-native";
import HomeScreen from "./screens/HomeScreen"
import GameScreen from "./screens/GameScreen";
import AboutScreen from "./screens/AboutScreen";

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
const assetDir = "../assets/img/";
export default function App(){
    // NEED SCREEN TRANSITION FUNCTION
    const [currentScreen, setCurrentScreen] = useState("Home");

    const goToScreen = (screenName) => {
      setCurrentScreen(screenName);
    }

    const renderScreen = () => {
      switch(currentScreen){
        case "Home":
        return <HomeScreen goToScreen={goToScreen}/>;
        break;
        
        case "Game":
        return <GameScreen goToScreen={goToScreen} cpuPlayer={false}/>;
        break;
        
        case "GameCPU":
        return <GameScreen goToScreen={goToScreen} cpuPlayer={true}/>;
        break;

        case "About":
        return <AboutScreen goToScreen={goToScreen}/>;
        break;
      }
    }

    return (
      <View style={{flex: 1}}>
        <Image style={styles.backgroundImage} source={require(assetDir + "/bg/" + "bg1" + ".png")}></Image>
        {renderScreen()}
      </View>
    )
}

const styles = StyleSheet.create({
  backgroundImage:{
      position:"absolute",
  }
});