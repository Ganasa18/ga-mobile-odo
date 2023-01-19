import {
  Text,
  View,
  ScrollView,
  TextInput as TextInputRN,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IcBack, IcCamera} from '../../assets';
import {Button, Gap, ProgressComponent, TextInput} from '../../components';
import {launchCamera} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {reportUpdateKm, setLoading} from '../../redux/action';

const Home2 = ({navigation}) => {
  const [imageCamera, setImageCamera] = useState(null);
  const [modal, setModal] = useState(false);
  const {reportReducer} = useSelector(state => state);
  const reportData = reportReducer.reportData;
  const [odometer, setOdometer] = useState(null);
  const [errorImg, setErrorImg] = useState(null);
  const [errorOdo, setErrorOdo] = useState(null);
  const dispatch = useDispatch();

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User Cancelled Image Picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageCamera(data);
      }
    });
  };

  const onSubmit = () => {
    if (!imageCamera || !odometer) {
      if (!imageCamera) {
        setErrorImg(true);
      } else {
        setErrorImg(null);
      }
      if (!odometer) {
        setErrorOdo(true);
      } else {
        setErrorOdo(null);
      }
      return;
    } else {
      setErrorImg(null);
      setErrorOdo(null);
    }
    const data = {
      img: imageCamera,
      odometer: odometer,
      data: reportData[0],
    };
    dispatch({type: 'SET_REPORT', value: data});
    setModal(true);
  };

  const submitForm = () => {
    setModal(false);

    setTimeout(() => {
      dispatch(setLoading(true));
    }, 1000);

    setTimeout(() => {
      dispatch(reportUpdateKm(reportData, navigation));
    }, 3000);

    // dispatch(setLoading(true));
    // setTimeout(() => {
    //   dispatch(setLoading(false));
    //   dispatch({type: 'SET_COUNT_TODAY', value: 3});
    //   setTimeout(() => {
    //     navigation.replace('SucessSubmit');
    //   }, 2000);
    // }, 3000);
  };

  return (
    <>
      {/* Modal Confirm */}
      <Modal
        transparent
        visible={modal}
        animationType={'fade'}
        onRequestClose={() => setModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalPop}>
            <Text style={styles.modalText}>
              Have you correctly filled out this form?
            </Text>
            <View style={styles.footerModal}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setModal(false);
                }}>
                <View
                  style={{
                    ...styles.buttonModal,
                    borderEndWidth: 0.5,
                    borderEndColor: '#C2C2C2',
                  }}>
                  <Text style={styles.buttonModalText}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={submitForm}>
                <View style={styles.buttonModal}>
                  <Text style={styles.buttonModalText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.page}>
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
        <Gap height={32} />
        <ProgressComponent
          step={2}
          title={'Tempat Akhir Perjalanan'}
          subtitle={'Next Kemana saja Kamu Hari Ini'}
          border={0}
        />
        <Gap height={32} />
        {/* Input Camera */}
        <Text style={styles.titleMargin}>Upload camera *</Text>
        <View style={styles.headerPadding}>
          {imageCamera !== null ? (
            <>
              <View>
                <ImageBackground
                  style={styles.imageShow}
                  source={{uri: imageCamera.uri}}
                  resizeMode="cover">
                  <TouchableOpacity activeOpacity={0.7} onPress={openCamera}>
                    <View style={styles.containerCancel}>
                      <Text style={styles.textCancelButton}>Re Capture</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </>
          ) : (
            <>
              <TouchableOpacity activeOpacity={0.7} onPress={openCamera}>
                <View
                  style={
                    errorImg !== null
                      ? styles.containerCameraError
                      : styles.containerCamera
                  }>
                  <IcCamera />
                  <Text style={styles.labelCameraName}>Tap to open camera</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
        {/* Error Validation */}
        {errorImg && (
          <>
            <Gap height={16} />
            <View style={styles.paddingOnly}>
              <Text style={styles.errorText}>
                You must take a picture from camera
              </Text>
            </View>
          </>
        )}
        <Gap height={16} />
        {/* Input Odometer */}
        <View style={styles.paddingOnly}>
          <TextInput
            label={'Odometer *'}
            placeholder={'Km...'}
            placeholderTextColor="#C2C2C2"
            keyboardType="phone-pad"
            onChangeText={e => setOdometer(e)}
          />
        </View>
        {/* Error Validation */}
        {errorOdo && (
          <>
            <Gap height={16} />
            <View style={styles.paddingOnly}>
              <Text style={styles.errorText}>Please fill odometer</Text>
            </View>
          </>
        )}
        <Gap height={80} />
        <View style={styles.paddingOnly}>
          <Button text={'LANJUT'} onPress={onSubmit} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home2;
