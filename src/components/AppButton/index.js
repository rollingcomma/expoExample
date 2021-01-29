import React from 'react';
import {
  Text,
  TouchableOpacity, 
  ActivityIndicator } from 'react-native';

export default AppButton = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  isSubmitting,
  disabled,
  indicatorColor,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) onPress();
      }}
      disabled={disabled || isSubmitting}
      style={containerStyle}
    >
      {isSubmitting ? (
        <ActivityIndicator color={indicatorColor} />
      ) : (
        <Text>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
