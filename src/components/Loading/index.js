import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useRef, useEffect} from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current.play();
  }, []);
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large" color="#2A4878" /> */}
      <LottieView
        ref={animation}
        source={require('./animation2.json')}
        autoPlay
        style={{height: 120, width: 120}}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
