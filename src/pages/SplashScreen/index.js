import LottieView from 'lottie-react-native';
import React, {useEffect, useRef} from 'react';
import {NativeModules, Platform, StyleSheet, Text, View} from 'react-native';
import {getData} from '../../utils/LocalStore';
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
import {useDispatch, useSelector} from 'react-redux';
import {checkTodayKm, checkStatusUser} from '../../redux/action';

const SplashScreen = ({navigation}) => {
  const animation = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    animation.current.play();
    setTimeout(async () => {
      getData('token').then(res => {
        if (res) {
          // navigation.replace('LoginScreen');
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
          getData('userData').then(res => {
            dispatch(checkStatusUser(res.value.id));
            dispatch(checkTodayKm(res.value.username));
          });
        } else {
          getData('userData')
            .then(res => {
              navigation.replace('LoginScreen');
              // console.log(res.value.id);
              dispatch(checkStatusUser(res.value.id));
              dispatch(checkTodayKm(res.value.username));
            })
            .catch(err => {
              console.log(
                'There has been a problem with your fetch operation: ' +
                  err.message,
              );
              // ADD THIS THROW error
              throw error;
            });
        }
      });
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LottieView
          ref={animation}
          source={require('./animation-mkd.json')}
          autoPlay
          style={{
            height: 120,
            width: 120,
            position: 'absolute',
            right: 60,
          }}
        />
        <View style={styles.containerTextLogo}>
          <Text style={styles.title}>General Affair Portal</Text>
          <Text style={styles.subtitle}>Department</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    flex: 1,
    backgroundColor: '#2A4878',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT - 10,
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextLogo: {
    marginTop: 15,
    marginLeft: 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#FFF',
  },
});
