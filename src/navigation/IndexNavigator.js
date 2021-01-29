import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FooterBar } from "../components";
import { Home } from "../screens"
import FeedNavigator from './FeedNavigator';
import ChatNavigator from './ChatNavigator';
//import FooterBarOwner from '../components/FooterBarOwner'

const Tab = createBottomTabNavigator();

export default function IndexNavigator() {
  
  return(
    <Tab.Navigator tabBar={props => <FooterBar {...props} />}>
      <Tab.Screen 
        name="Feed"
        component={FeedNavigator}
        options={{title:"Feed"}}
      />
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{title:"Home"}}
      />
      <Tab.Screen 
        name="Chat"
        component={ChatNavigator}
        options={{title:"Chat"}}
      />
    </Tab.Navigator>
  )
 
}
