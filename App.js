import React, { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from "./src/screens/GameScreen";



const App = () => {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App