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
    const [backgroundImage, setBGImage] = useState(1);

    const changeBG = (newBG) => {
      setBGImage(newBG);
    }

    const goToScreen = (screenName) => {
      setCurrentScreen(screenName);
    }

    const renderBackground = () => {
      
      // I have to work under this bizzare limitation. Otherwise i'd just say bg + backgroundImage + .png. -Brandt

      switch(backgroundImage){
        case 1:
          return <Image style={styles.backgroundImage} source={require(assetDir + "/bg/bg1.png")}></Image>
          break;
        case 2:
          return <Image style={styles.backgroundImage} source={require(assetDir + "/bg/bg2.png")}></Image>
          break;
        case 3:
          return <Image style={styles.backgroundImage} source={require(assetDir + "/bg/bg3.png")}></Image>
          break;
      }
    }

    const renderScreen = () => {
      switch(currentScreen){
        case "Home":
        return <HomeScreen goToScreen={goToScreen} onChangeBG={changeBG}/>;
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
        {renderBackground()}
        {renderScreen()}
      </View>
    )
}

const styles = StyleSheet.create({
  backgroundImage:{
      position:"absolute",
      width:windowWidth,
      height:windowHeight
  }
});