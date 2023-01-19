import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
const {StatusBarManager} = NativeModules;

// const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
import React, {useState, useEffect, useRef} from 'react';
import {Button, Gap, TextInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  IcBack,
  IcSearch,
  IcKonsumen,
  IcRumah,
  IcStop,
  IcKantor,
  IcSearchLocation,
} from '../../assets';

const LocationScreen = ({navigation}) => {
  const [input, setInput] = useState('');
  const locationRef = useRef(null);
  const {locationReducer} = useSelector(state => state);
  const selectedCategory = locationReducer.formCategorySelect;
  const selectedId = locationReducer.formIdSelect;
  const formInput = locationReducer.formLocation;
  const dataLoc = locationReducer.locationType;

  const [customerList, setCustomerList] = useState(dataLoc);

  const dispatch = useDispatch();

  const Icon = ({label, focus}) => {
    switch (label) {
      case 'konsumen':
        return <IcKonsumen />;
      case 'tempat berhenti':
        return <IcStop />;
      case 'kantor':
        return <IcKantor />;
      case 'rumah':
        return <IcRumah />;
      default:
        return <IcKonsumen />;
    }
  };

  useEffect(() => {}, []);

  const handleSelectedLocation = value => {
    const _inputs = [...formInput];
    let myArray = _inputs;
    let objIndex = myArray.findIndex(obj => obj.key === selectedId);

    myArray[objIndex].location = value;
    myArray[objIndex].newLoc = false;

    [
      ...myArray.slice(0, objIndex),
      Object.assign({}, myArray[objIndex], ...myArray.slice(objIndex + 1)),
    ];
    dispatch({type: 'SET_FORM_LOCATION', value: myArray});
    navigation.reset({index: 0, routes: [{name: 'Kilometer3'}]});
  };

  const handleSelectedLocationSubmit = () => {
    const _inputs = [...formInput];
    let myArray = _inputs;
    let objIndex = myArray.findIndex(obj => obj.key === selectedId);
    myArray[objIndex].location = input;
    myArray[objIndex].tag = 'user';
    myArray[objIndex].newLoc = true;

    [
      ...myArray.slice(0, objIndex),
      Object.assign({}, myArray[objIndex], ...myArray.slice(objIndex + 1)),
    ];
    dispatch({type: 'SET_FORM_LOCATION', value: myArray});
    navigation.reset({index: 0, routes: [{name: 'Kilometer3'}]});
  };

  const filterByValue = (array, value) => {
    return array.filter(
      data =>
        JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );
  };

  const handleSearchArea = value => {
    setInput(value);
    setTimeout(() => {
      if (value.length <= 0) {
        setCustomerList(dataLoc);
        return;
      }
      let searchRequest = filterByValue(dataLoc, value);
      setCustomerList(searchRequest);
    }, 3000);
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
          placeholder={'PT/SPBU/...'}
          placeholderTextColor="#C2C2C2"
          autoFocus={true}
          onChangeText={text => handleSearchArea(text)}
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

      <ScrollView style={styles.paddingRecent}>
        {customerList?.length > 0 ? (
          customerList?.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              style={styles.recentContainer}
              onPress={() => handleSelectedLocation(item.location_name)}>
              <Icon label={selectedCategory} />
              <Gap width={22} />
              <View style={styles.recentContainerText}>
                <Text style={styles.title}>{item.location_name}</Text>
                <Gap height={8} />
                <Text style={styles.subtitle}>
                  {item.location_name_rev
                    ? item.location_name_rev
                    : item.location_name}
                </Text>
                <Gap height={16} />
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <>
            <Gap height={80} />
            <View style={styles.searchContainer}>
              <View style={styles.searchIconContainer}>
                <IcSearchLocation />
              </View>
              <Gap height={16} />
              <Text>Search not found</Text>
              <Gap height={16} />
              <Button
                text="Keeping add location"
                onPress={handleSelectedLocationSubmit}
              />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 30,
    paddingTop: STATUSBAR_HEIGHT - 10,
  },

  containerSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 34,
  },
  containerBack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
  },
  divider: {
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.5,
  },
  paddingRecent: {
    marginHorizontal: 24,
  },
  recentTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
  },
  recentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.5,
    marginBottom: 16,
    marginTop: 16,
  },

  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#444444',
    maxWidth: 250,
    lineHeight: 20,
  },

  searchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 13,
    paddingVertical: 13,
  },
});
