import React, { useState } from "react"
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen"
import GameScreen from "./screens/GameScreen";

const App = () => {
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
          return <GameScreen goToScreen={goToScreen}/>;
          break;
      }
    }

    return (
      <View style={{flex: 1}}>
        {renderScreen()}
      </View>
    )
}

export default App