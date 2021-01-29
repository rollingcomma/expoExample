
import React from 'react';
import { Button, View } from 'react-native';

export default ContinueAs = ({ navigation }) => {
  return (
    <View >
      <Button 
        title="Login"
        onPress={() => navigation.navigate("Index")} />
      <Button
        title="Register " 
        onPress={() => navigation.navigate("Register")}/>
    </View>
  )
}