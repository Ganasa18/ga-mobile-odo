import {
  Text,
  View,
  TouchableOpacity,
  TextInput as TextInputRN,
  ScrollView,
} from 'react-native';

import React, {useEffect} from 'react';
import styles from './styles';
import {IcBack, IcFloat, IcSearch} from '../../assets';
import {Button, Gap, ProgressComponent, TextInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getDataLocation, submitLocationForm} from '../../redux/action';

const Home3 = ({navigation}) => {
  const {locationReducer, reportReducer} = useSelector(state => state);
  const reportData = reportReducer.reportData;
  const formInputs = locationReducer.formLocation;
  const dispatch = useDispatch();
  const handleAddMoreLine = () => {
    const _inputs = [...formInputs];
    const keyLength = formInputs.length;
    _inputs.push({
      key: keyLength + 1,
      category: '',
      location: '',
      tag: '',
      newLoc: false,
    });
    // setFormInputs(_inputs);
    dispatch({type: 'SET_FORM_LOCATION', value: _inputs});
  };

  const handleSelect = key => {
    console.log('key');
  };

  useEffect(() => {
    dispatch(getDataLocation());
  }, []);

  return (
    <>
      <ScrollView style={styles.page}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
            }>
            <View style={styles.containerBack}>
              <IcBack />
            </View>
          </TouchableOpacity>
          <Gap height={32} />
          <Text style={styles.headerName}>Kilometer</Text>
        </View>
        <Gap height={32} />
        <ProgressComponent
          step={3}
          title={'Sudah kemana saja kamu hari ini?'}
          subtitle={''}
          border={0}
        />
        <Gap height={32} />
        {formInputs.map((input, key) => (
          <>
            {key + 1 !== 1 && <Gap height={15} />}
            <View key={key} style={styles.containerLocation}>
              <TextInput
                value={input.location}
                label={`Tempat ${key + 1} *`}
                placeholder={'Customer/SPBU/Home...'}
                placeholderTextColor="#C2C2C2"
                pointerEvents="none"
                onFocus={() => {
                  dispatch({type: 'SET_FORM_SELECT_ID', value: input.key});
                  navigation.navigate('Category');
                }}
                icon={
                  <IcSearch
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: 30,
                      padding: 10,
                    }}
                  />
                }
              />
            </View>
            <Gap height={25} />
          </>
        ))}
        <Gap height={25} />
      </ScrollView>
      <Gap height={30} />
      <View style={styles.paddingOnly}>
        <Button
          text={'SUBMIT'}
          onPress={() =>
            dispatch(submitLocationForm(formInputs, reportData, navigation))
          }
        />
      </View>
      <Gap height={50} />
      <TouchableOpacity
        style={styles.buttonAdd}
        activeOpacity={0.7}
        onPress={handleAddMoreLine}>
        <View style={{padding: 4}}>
          <IcFloat height={60} width={60} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Home3;
