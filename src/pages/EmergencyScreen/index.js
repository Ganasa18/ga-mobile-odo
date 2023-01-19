import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {IcBack, IcEmergency} from '../../assets';
import {Gap} from '../../components';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

const Ring = ({delay}) => {
  const ring = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      opacity: 0.7 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 4], [1, 6]),
        },
      ],
    };
  });
  const style2 = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [1, 7]),
        },
      ],
    };
  });

  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 4000,
        }),
        -1,
      ),
    );
  }, []);

  return (
    <>
      <Animated.View style={[styles.ring, style]} />
      {/* <Animated.View style={[styles.ring, style2]} /> */}
    </>
  );
};

const EmergencyScreen = ({navigation}) => {
  const urlWa =
    'https://wa.me/6281284723099?text=Saya%20butuh%20bantuan%20emergency%20cuy';

  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <View style={styles.containerBack}>
            <IcBack />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerName}>Kilometer</Text>
      </View>
      <Gap height={60} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          Linking.openURL(urlWa);
        }}
        style={styles.containerEmergency}>
        <Text style={styles.textIcon}>Emergency Call</Text>
        <Gap height={87} />
        <View style={styles.containerButtonEmergency}>
          <IcEmergency style={styles.iconEmergency} />
          <Ring delay={0} />
          <Ring delay={500} />
          <Ring delay={1000} />
          <Ring delay={2000} />
          <Ring delay={3000} />
        </View>
        <Gap height={80} />
        <View style={styles.containerTextTitle}>
          <Text style={styles.textTitle}>
            Tekan icon bell jika kendaraan kamu mengalami keadaan darurat
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EmergencyScreen;
