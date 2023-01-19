import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button, Gap} from '../../components';
import {SuccessIcon} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';

const SuccessScreen = ({
  navigation,
  text = ' Pengisian data berangkat berhasil dilanjutkan',
}) => {
  const {globalReducer} = useSelector(state => state);

  return (
    <View style={styles.page}>
      <Gap height={60} />
      <View style={styles.container}>
        <Text style={styles.title}>Selamat</Text>
        <Gap height={16} />
        <SuccessIcon />
        <Gap height={8} />
        <Text style={styles.subtitle}>{text}</Text>
        <Gap height={24} />
        <View style={styles.buttonContainer}>
          <Button
            text="Home"
            paddingVert={8}
            onPress={() => {
              navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SuccessScreen;
