import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  color,
  text,
  textColor,
  onPress,
  paddingVert,
  paddingHori,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={{...styles.container(color, paddingVert, paddingHori)}}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color, paddingVert, paddingHori) => ({
    backgroundColor: !color ? '#2A4878' : color,
    paddingHorizontal: !paddingHori ? 12 : paddingHori,
    paddingVertical: !paddingVert ? 12 : paddingVert,
    borderRadius: 5,
  }),
  text: textColor => ({
    color: !textColor ? '#FFFFFF' : textColor,
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    alignItems: 'center',
    textAlign: 'center',
  }),
});
