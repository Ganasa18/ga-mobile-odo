import {Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {IcBack, IcKonsumen, IcRumah, IcStop, IcKantor} from '../../assets';
import {Gap} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {filterLocationByCategory, getDataLocation} from '../../redux/action';

const CategoryScreen = ({navigation}) => {
  const {locationReducer} = useSelector(state => state);
  const selectedId = locationReducer.formIdSelect;
  const formInput = locationReducer.formLocation;
  const dataLoc = locationReducer.dataLocation;
  const dispatch = useDispatch();

  const category = [
    {
      key: 1,
      icon: <IcKonsumen />,
      title: 'Konsumen',
      value: 'konsumen',
    },
    {
      key: 2,
      icon: <IcStop />,
      title: 'Tempat Berhenti (SPBU, Bengkel dll )',
      value: 'tempat berhenti',
    },
    {
      key: 3,
      icon: <IcKantor />,
      title: 'Kantor',
      value: 'kantor',
    },
    {
      key: 4,
      icon: <IcRumah />,
      title: 'Rumah',
      value: 'rumah',
    },
  ];

  // console.log(selectedId);

  const handleSelectedCategory = value => {
    const _inputs = [...formInput];
    let myArray = _inputs;
    let objIndex = myArray.findIndex(obj => obj.key === selectedId);
    // //Log object to Console.
    // console.log('Before update: ', myArray[objIndex]);

    //Update object's category property.
    myArray[objIndex].category = value;

    // // //Log object to console again.
    // console.log('After update: ', myArray[objIndex]);

    [
      ...myArray.slice(0, objIndex),
      Object.assign({}, myArray[objIndex], ...myArray.slice(objIndex + 1)),
    ];
    dispatch({type: 'SET_FORM_SELECT_CATEGORY', value: value});
    dispatch({type: 'SET_FORM_LOCATION', value: myArray});
    dispatch(filterLocationByCategory(dataLoc, value));
    navigation.navigate('LocationScreen');
  };

  // useEffect(() => {
  //   dispatch(getDataLocation());
  // }, []);

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
        <Gap height={32} />
        <Text style={styles.headerName}>Kilometer</Text>
      </View>
      {category.map((item, key) => (
        <TouchableOpacity
          key={key}
          style={styles.container}
          activeOpacity={0.7}
          onPress={() => handleSelectedCategory(item.value)}>
          <View style={styles.categoryContainer}>
            {item.icon}
            <Gap width={16} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryScreen;
