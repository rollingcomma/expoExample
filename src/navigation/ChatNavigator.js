import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { 
  ChatChannel,  
  Profile, 
} from "../screens";

const Stack = createStackNavigator();

export default ChatNavigator = () => {
  //const [userState] = useUserState();
  return (
    <Stack.Navigator>
      
      <Stack.Screen 
        name="Chatting"
        component={ChatChannel}
        options={{title: "Chat Room"}}
      />
      <Stack.Screen 
        name="Profile"
        component={Profile}
        options={{title:"Profile"}}
      />
    </Stack.Navigator>
  )
  
}
