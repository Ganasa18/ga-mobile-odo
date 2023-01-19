import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const OverflowPage = (status = false) => {
  return <View style={styles.page}></View>;
};

export default OverflowPage;

const styles = StyleSheet.create({
  page: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#4444440C',
    width: SCREEN_WIDTH,
    height: '60%',
    bottom: 0,
    zIndex: 1,
  },
});
