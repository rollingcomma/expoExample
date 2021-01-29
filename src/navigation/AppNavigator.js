import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import IndexNavigator from "./IndexNavigator"
import { ContinueAs, Register } from '../screens';

const Stack = createStackNavigator();

export default AppNavigator = () => {
  //const [userState] = useUserState();
  //console.log(userState);
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Landing"
          component={ContinueAs} 
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Index"
          component={IndexNavigator} 
          options={{headerShown: false}}
        />
    
      <Stack.Screen
        name="Register"
        component={Register} 
      />
    </Stack.Navigator>
  )
}