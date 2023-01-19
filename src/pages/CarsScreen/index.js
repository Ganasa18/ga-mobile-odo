import {TouchableOpacity, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {IcBack, IcSearch} from '../../assets';
import {Gap, TextInput} from '../../components';
import {getData, storeData} from '../../utils/LocalStore';
import {useDispatch, useSelector} from 'react-redux';

const CarsPage = ({navigation}) => {
  const {userReducer} = useSelector(state => state);
  const dispatch = useDispatch();
  const [listCar, setListCar] = useState([]);
  const userData = userReducer.userData;
  useEffect(() => {
    funcListCar();
  }, []);

  const funcListCar = () => {
    let arr = [];
    let defaultCar = {
      value: userData.plate_car,
      label: userData.plate_car + '/' + userData.model_vehicle,
      model_vehicle: userData.model_vehicle,
    };
    let car1 = userData.car_1;
    let car2 = userData.car_2;
    let car3 = userData.car_3;
    let car4 = userData.car_4;
    if (defaultCar) {
      arr.push(defaultCar);
    }
    if (car1) {
      arr.push(JSON.parse(car1));
    }
    if (car2) {
      arr.push(JSON.parse(car2));
    }
    if (car3) {
      arr.push(JSON.parse(car3));
    }
    if (car4) {
      arr.push(JSON.parse(car4));
    }
    setListCar(arr);
  };

  return (
    <View style={styles.page}>
      <View style={styles.containerSearch}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <View style={styles.containerBack}>
            <IcBack />
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder={'Car...'}
          placeholderTextColor="#C2C2C2"
          autoFocus={true}
          // onChangeText={text => setInput(text)}
          icon={
            <IcSearch
              style={{padding: 10, position: 'absolute', right: 10, top: 30}}
            />
          }
        />
      </View>
      <Gap height={16} />
      <View style={styles.divider} />
      <Gap height={24} />
      <View style={styles.paddingRecent}>
        <Text style={styles.recentTitle}>All</Text>
        <Gap height={14} />
        {listCar.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            style={styles.carContainer}
            onPress={() => {
              dispatch({type: 'SET_SELECTED_CAR', value: item});
              navigation.goBack();
            }}>
            <Text style={styles.title}>{item?.model_vehicle}</Text>
            <Text style={styles.subtitle}>{item?.value}</Text>
            <Gap height={16} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CarsPage;
