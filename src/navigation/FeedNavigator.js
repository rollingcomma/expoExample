import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Feed, ProfileW} from "../screens";
//import { useUserState } from "../hook/useUserState";

const Stack = createStackNavigator();

export default FeedNavigator = () => {
  //const [userState] = useUserState();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{title:"Feed"}}
        />
      <Stack.Screen 
        name="Profile"
        component={ProfileW}
        options={{title:"Profile"}}
      />
    </Stack.Navigator>
  )
  
}
