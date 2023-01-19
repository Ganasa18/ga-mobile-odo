import React, {useState} from 'react';
import {
  Text,
  TextInput as TextInputRN,
  View,
  TouchableOpacity,
} from 'react-native';
import {Login} from '../../assets';
import {Button, Gap, TextInput} from '../../components';
import {storeData} from '../../utils/LocalStore';
import {showMessage} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {signInAction} from '../../redux/action';

const LoginScreen = ({navigation}) => {
  const {globalReducer} = useSelector(state => state);
  const isButtonLogin = globalReducer.isButtonLogin;
  const [option, setOption] = useState('driver');
  const [backgroundColor, setBackgroundColor] = useState('#C8D8E2');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const loginOption = () => {
    // alert('login');
    if (option === 'driver') {
      dispatch(signInAction(phoneNumber, navigation));
      // storeData('token', {value: 'token'});
      // showMessage('Success Login', 'success');
      // setTimeout(() => {
      //   navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      // }, 2000);
    } else {
      navigation.replace('HomeAdmin');
    }
  };

  return (
    <View style={styles.container}>
      <Login style={styles.logo} />
      <Gap height={80} />
      <View style={styles.cardContainer}>
        <Text style={styles.titleCard}>
          Login For {option === 'driver' ? 'Driver' : 'Admin'}
        </Text>
        <Gap height={38} />

        {option === 'driver' ? (
          <>
            {/* For Driver */}
            <Text style={styles.label}>Phone Number</Text>
            {/* Input Number Driver */}
            <View style={styles.containerForm}>
              <View style={styles.codeCountry}>
                <Text style={styles.labelCountry}>+62</Text>
              </View>
              <TextInputRN
                style={{...styles.input, backgroundColor}}
                keyboardType="phone-pad"
                onBlur={() => setBackgroundColor('#C8D8E2')}
                onFocus={() => setBackgroundColor('#FFF')}
                onChangeText={value => setPhoneNumber(value)}
              />
            </View>
          </>
        ) : (
          <>
            {/* For Admin */}
            <TextInput label="Username" />
            <Gap height={16} />
            <TextInput label="Password" secureTextEntry />
          </>
        )}

        <Gap height={47} />

        {isButtonLogin ? (
          <Button text={'Login'} onPress={loginOption} />
        ) : (
          <Button color={'#2A4878AC'} text={'Loading..'} />
        )}
        <Gap height={40} />
        {/* Option Login */}
        <View style={styles.optionLoginContainer}>
          {option === 'driver' ? (
            <>
              <Text style={styles.labelOption}>Login For Admin ? </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setOption('admin');
                }}>
                <View>
                  <Text style={styles.valueOption}>Login</Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setOption('driver');
              }}>
              <View>
                <Text style={styles.valueOption}>Back</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <Gap height={46} />
      </View>
    </View>
  );
};

export default LoginScreen;
