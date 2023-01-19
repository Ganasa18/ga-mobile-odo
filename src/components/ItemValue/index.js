import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemValue = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.6,
    paddingVertical: 16,
  },
  label: {
    marginHorizontal: 25,
    paddingBottom: 8,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
  },
  value: {
    marginHorizontal: 25,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#444444',
  },
});
