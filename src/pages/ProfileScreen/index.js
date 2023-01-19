import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {dummyPhoto, IcBack} from '../../assets';
import {Button, Gap, ItemValue} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
const ProfileScreen = ({navigation}) => {
  const {userReducer} = useSelector(state => state);
  const userData = userReducer.userData;
  const dispatch = useDispatch();

  const signOut = () => {
    AsyncStorage.multiRemove(['token', 'reminder', 'userData']).then(() => {
      dispatch({type: 'SET_LOGIN_BUTTON', value: true});
      navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
    });
  };

  return (
    <ScrollView style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerName}>Profile</Text>
      </View>
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          <Image source={dummyPhoto} style={styles.photoContainer} />
        </View>
      </View>
      <Gap height={16} />
      <ItemValue label={'First Name'} value={userData?.firstName} />
      <ItemValue label={'Last Name'} value={userData?.lastName} />
      <ItemValue label={'Department'} value={userData?.departement_name} />
      <ItemValue label={'Area'} value={userData?.area_name} />
      <ItemValue label={'Car'} value={userData?.model_vehicle} />
      <ItemValue label={'Plat NO'} value={userData?.plate_car} />
      <Gap height={32} />
      <View style={styles.paddingOnly}>
        <Button text={'Log Out'} onPress={signOut} />
      </View>
      <Gap height={32} />
    </ScrollView>
  );
};

export default ProfileScreen;
