import React from 'react';
import Screen from "./src/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
// import UserStateProvider from "./src/context/UserStateProvider";
import { LogBox } from "react-native";

export default App= () => {
    LogBox.ignoreLogs([
      "Expected style",
      "Non-serializable values were found in the navigation state",
      "Setting a timer for a long period of time",
      "Warning: Failed prop type",
      "Warning: Can't perform a React state update on an unmounted component"
    ]);
    return (
   
      <Screen>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer> 
      </Screen>
    
    
  );
}
