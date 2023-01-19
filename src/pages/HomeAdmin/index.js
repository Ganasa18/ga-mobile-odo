import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeAdminScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>HomeAdminScreen</Text>
    </View>
  );
};

export default HomeAdminScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#444',
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
  },
});
