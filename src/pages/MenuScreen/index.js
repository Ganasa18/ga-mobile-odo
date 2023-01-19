import styles from './styles';
import React, {useState, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, TouchableOpacity, Modal} from 'react-native';
import {
  BellMenu,
  IcClose,
  IcCloseModal,
  IcDrop,
  IcKm,
  IcVisit,
  Logo,
  OdoMenu,
} from '../../assets';
import {
  BottomModal,
  Button,
  Gap,
  ModalConfirm,
  OverflowPage,
  ProgressComponent,
} from '../../components';
import Switch from 'react-native-switch-toggles-2';
import {RadioButton} from 'react-native-radio-buttons-group';
import MonthPicker from 'react-native-month-year-picker-inf';
import moment from 'moment';
import PushNotification, {Importance} from 'react-native-push-notification';
import {getData, storeData} from '../../utils/LocalStore';
import {
  checkStatusUser,
  checkTodayReport,
  checkTotalKilometer,
  checkTotalKilometerSelected,
  offlineSubmit,
  onlineSubmit,
  setLoading,
} from '../../redux/action';
import {capitalizeFirstLetter} from '../../utils';

const MenuScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {globalReducer, userReducer, reportReducer} = useSelector(
    state => state,
  );
  const radioSelect = globalReducer.isRemarkSelected;
  // const userOffline = userReducer.userOffline;
  const isEnabled = globalReducer.isEnabled;
  const modalRemark = globalReducer.isModalRemark;
  // const modalMonth = globalReducer.isModalMonth;
  const totalKm = reportReducer.totalKm;
  const totalVisit = reportReducer.totalVisit;
  const countToday = globalReducer.isCountToday;
  const userData = userReducer.userData;

  // const countToday = 3;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;
      showPicker(false);
      dispatch(checkTotalKilometerSelected(userData?.username, selectedDate));
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  const toggleSwitch = value => {
    if (value == false) {
      dispatch({type: 'SET_MODAL_REMARK', value: true});
      dispatch({type: 'SET_IS_ENABLED', value: false});
      return;
    }
    dispatch(onlineSubmit(userData, value));
  };

  const bodyRemark = (
    <>
      <RadioButton
        labelStyle={{color: '#444444'}}
        label="Izin"
        value={'izin'}
        selected={radioSelect === 'izin' ? true : false}
        onPress={() => dispatch({type: 'SET_REMARK_SELECT', value: 'izin'})}
      />
      <Gap height={10} />
      <RadioButton
        labelStyle={{color: '#444444'}}
        label="Sakit"
        value={'sakit'}
        selected={radioSelect === 'sakit' ? true : false}
        onPress={() => dispatch({type: 'SET_REMARK_SELECT', value: 'sakit'})}
      />
      <Gap height={10} />
      <RadioButton
        labelStyle={{color: '#444444'}}
        label="Tidak ada visit"
        value={'no visit'}
        selected={radioSelect === 'no visit' ? true : false}
        onPress={() => dispatch({type: 'SET_REMARK_SELECT', value: 'no visit'})}
      />
      <Gap height={30} />
      <Button
        text={'SUBMIT'}
        onPress={() => {
          if (!globalReducer.isRemarkSelected) {
            alert('Must select one');
            return;
          }
          dispatch({type: 'SET_MODAL_CONFIRM', value: true});
        }}
      />
    </>
  );

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'demo-channel', // (required)
      channelName: 'Demo channel', // (required)
      vibrate: true, // (optional)
    });
  };

  const handleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'demo-channel',
      title: 'Berangkat 😍',
      message:
        'Jangan lupa untuk mengisi data terlebih dahulu sebelum anda berangkat ' +
        new Date().toLocaleDateString(),
      date: new Date(Date.now() + 1 * 1000),
      repeatType: 'day',
      repeatTime: 1, //Repeat every 1 days
      importance: Importance.HIGH,
    });
  };
  useEffect(() => {
    dispatch(setLoading(true));
    getData('userData').then(res => {
      dispatch({type: 'SET_USER_DATA', value: res.value});
      dispatch(checkTodayReport(res.value.username));
      // dispatch(checkStatusUser(res.value.id));
      dispatch(checkTotalKilometer(res.value.username));
    });
    createChannels();
    setTimeout(() => {
      getData('reminder').then(res => {
        if (res) {
          dispatch(setLoading(false));
        } else {
          handleNotification();
          storeData('reminder', {value: true});
        }
      });
    }, 2000);
  }, []);

  return (
    <ScrollView style={styles.pages}>
      {/* Modal Remark */}
      <BottomModal
        body={bodyRemark}
        title="Remark"
        onRequestClose={() => {
          dispatch({type: 'SET_MODAL_REMARK', value: false});
        }}
        onPress={() => {
          dispatch({type: 'SET_MODAL_REMARK', value: false});
        }}
        visible={modalRemark}
      />
      {/* Confirm Remark */}
      <ModalConfirm
        title="Apakah anda yakin untuk menonaktifkan aplikasi ini?"
        subtitle="Jika sudah tidak aktif maka semua fitur tidak dapat digunakan"
        onCancel={() => dispatch({type: 'SET_MODAL_CONFIRM', value: false})}
        onSubmit={() =>
          dispatch(
            offlineSubmit(userData, globalReducer.isRemarkSelected, isEnabled),
          )
        }
      />

      {show && <MonthPicker onChange={onValueChange} value={date} />}

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Logo />
          <Text style={styles.logoName}>GA Portal</Text>
        </View>
      </View>
      <Gap height={32} />
      {/* Switch On/Off */}
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeTitle}>
          Welcome {userData ? capitalizeFirstLetter(userData?.username) : null}
        </Text>
        {console.log(isEnabled, 'from main menu')}
        {countToday === 1 ? (
          <>
            {isEnabled !== null ? (
              <Switch
                size={35}
                value={isEnabled}
                onChange={value => toggleSwitch(value)}
                activeTrackColor={'#45D058'}
                activeThumbColor={'#C8D8E2'}
                renderOffIndicator={() => (
                  <Text style={{fontSize: 14, color: 'white', paddingRight: 4}}>
                    OFF
                  </Text>
                )}
                renderOnIndicator={() => (
                  <Text style={{fontSize: 14, color: 'white', paddingRight: 4}}>
                    ON
                  </Text>
                )}
              />
            ) : null}
          </>
        ) : null}
      </View>
      <Gap height={32} />
      {/* Dashboard */}
      <View style={styles.containerDashboard}>
        <View style={styles.dasboard}>
          <View style={styles.dashboardTitleContainer}>
            <Text style={styles.titleDashboard}>Dashboard Saya</Text>
            <Gap height={20} />
            <Text style={styles.subTitleDashboard}>Total KM</Text>
            <Gap height={20} />
            <View style={styles.containerDetail}>
              <Text style={styles.subTitleDetail}>{totalKm}</Text>
              <Gap width={7} />
              <IcKm />
            </View>
          </View>
          <View
            style={{
              width: 2,
              backgroundColor: '#FFF',
              height: 100,
              marginTop: 5,
            }}></View>
          <View style={styles.dashboardTitleContainer2}>
            <View style={styles.dateSelect}>
              <TouchableOpacity
                style={styles.dateBorder}
                activeOpacity={0.4}
                onPress={() => {
                  showPicker(true);
                  // dispatch({type: 'SET_MONTH_SELECT', value: true});
                }}>
                <Text style={styles.titleDashboard}>
                  {moment(date).format('MMM-YYYY')}
                  {/* {moment(date, 'MM-YYYY')} */}
                </Text>
                <Gap width={7} />
                <IcDrop />
              </TouchableOpacity>
            </View>
            <Gap height={40} />
            <Text style={styles.subTitleDashboard}>Total Visit</Text>
            <Gap height={20} />
            <View style={styles.containerDetail}>
              <Text style={styles.subTitleDetail}>{totalVisit}</Text>
              <Gap width={7} />
              <IcVisit />
            </View>
          </View>
        </View>
      </View>
      {isEnabled == false ? <OverflowPage /> : null}
      <Gap height={32} />
      {/* Work Step */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          if (countToday === 1) {
            navigation.navigate('Kilometer');
            return;
          } else if (countToday === 2) {
            navigation.navigate('Kilometer2');
            return;
          } else if (countToday === 3) {
            navigation.navigate('Kilometer3');
            return;
          } else {
            // navigation.navigate('Kilometer3');
          }
        }}>
        <ProgressComponent
          step={countToday}
          title={`${
            countToday === 1
              ? 'Tempat Awal Berangkat'
              : countToday === 2
              ? 'Tempat Akhir Perjalanan'
              : 'Sudah kemana saja kamu hari ini?'
          }`}
          subtitle={`${
            countToday === 1
              ? 'Tempat Akhir Perjalanan'
              : 'Next Kemana Saja Kamu Hari Ini'
          }`}
        />
      </TouchableOpacity>
      <Gap height={28} />
      {/* Menu User */}
      <View style={styles.containerMenu}>
        <TouchableOpacity
          style={styles.cardMenu}
          activeOpacity={0.7}
          onPress={() => {
            if (countToday === 1) {
              navigation.navigate('Kilometer');
              return;
            } else if (countToday === 2) {
              navigation.navigate('Kilometer2');
              return;
            } else if (countToday === 3) {
              navigation.navigate('Kilometer3');
              return;
            } else {
            }
          }}>
          <OdoMenu />
          <Gap height={8} />
          <Text style={styles.menuTitle}>Kilometer</Text>
        </TouchableOpacity>
        <Gap width={74} />
        <TouchableOpacity
          style={styles.cardMenu}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('Emergency');
          }}>
          <BellMenu />
          <Gap height={8} />
          <Text style={styles.menuTitle}>Emergency</Text>
        </TouchableOpacity>
      </View>

      {/* <View>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          containerStyle={{flexDirection: 'row'}}
        />
      </View> */}
      <Gap height={80} />
    </ScrollView>
  );
};

export default MenuScreen;
