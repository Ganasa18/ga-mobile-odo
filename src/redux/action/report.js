import axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';
import {Platform} from 'react-native';

export const reportSubmit = (data, navigation) => async dispatch => {
  const imageFormData = new FormData();
  const dataImage = {
    name: data.img.fileName,
    type: data.img.type,
    uri:
      Platform.OS === 'ios'
        ? data.img.uri.replace('file://', '')
        : data.img.uri,
  };

  imageFormData.append('picture_odometer', dataImage);
  imageFormData.append('username', data?.user?.username);
  imageFormData.append('plate_car', data?.car?.value);
  imageFormData.append('car_name', data?.car?.model_vehicle);
  imageFormData.append('departement', data?.user?.departement_name);
  imageFormData.append('area', data?.user?.area_name);
  imageFormData.append('odometer', data?.odometer);

  const url = `${API_HOST.url}/report/`;
  await axios
    .post(url, imageFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      dispatch({type: 'SET_COUNT_TODAY', value: 2});
      dispatch(setLoading(false));
      navigation.replace('SucessSubmit');
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};
export const reportUpdateKm = (data, navigation) => async dispatch => {
  if (data?.odometer < data?.data?.km_awal) {
    showMessage(`Tidak boleh lebih kecil dari kilometer awal`, 'danger');
    dispatch(setLoading(false));
    return;
  }

  const imageFormData = new FormData();

  const dataImage = {
    name: data.img.fileName,
    type: data.img.type,
    uri:
      Platform.OS === 'ios'
        ? data.img.uri.replace('file://', '')
        : data.img.uri,
  };

  const url = `${API_HOST.url}/report/update-kilometer`;
  const total_km = data?.odometer - data?.data?.km_awal;

  imageFormData.append('picture_odometer', dataImage);
  imageFormData.append('username', data?.data?.user_name);
  imageFormData.append('odometer', data?.odometer);
  imageFormData.append('km_total', total_km);

  await axios
    .patch(url, imageFormData, {
      headers: {'Content-Type': 'multipart/form-data'},
    })
    .then(response => {
      dispatch({type: 'SET_COUNT_TODAY', value: 3});
      dispatch(setLoading(false));
      navigation.replace('SucessSubmit');
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};

export const checkTodayKm = user => async dispatch => {
  const url = `${API_HOST.url}/report/today/${user}`;
  await axios
    .get(url)
    .then(response => {
      console.log(response.data);
      dispatch({type: 'SET_COUNT_TODAY', value: response?.data?.count});
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};

export const checkTodayReport = user => async dispatch => {
  const url = `${API_HOST.url}/report/today/${user}`;
  await axios
    .get(url)
    .then(response => {
      if (response?.data?.count != 1) {
        dispatch({type: 'SET_REPORT', value: response?.data?.data?.check});
      }
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};

export const submitLocationForm =
  (form, user, navigation) => async dispatch => {
    if (form[0].location == '')
      return showMessage('Tempat 1 Wajib Di Isi', 'error');
    // dispatch(setLoading(true));
    let locationData = JSON.stringify(form);
    let checkNewLoc = form.some(item => item.tag === 'user');
    const data = {
      location: locationData,
      newLocation: checkNewLoc,
    };
    const url = `${API_HOST.url}/report/update-location-today/${user[0]?.user_name}`;
    await axios
      .patch(url, data)
      .then(response => {
        dispatch({type: 'SET_COUNT_TODAY', value: 4});
        dispatch(setLoading(false));
        navigation.replace('SucessSubmit');
      })
      .catch(error => {
        console.error(error);
        showMessage(`Something went wrong`, 'danger');
        dispatch(setLoading(false));
      });
  };

export const checkTotalKilometer = user => async dispatch => {
  const url = `${API_HOST.url}/report/check-km/${user}`;
  await axios
    .get(url)
    .then(response => {
      dispatch({type: 'SET_TOTAL_KILOMETER', value: response?.data?.total_km});
      dispatch({type: 'SET_TOTAL_VISIT', value: response?.data?.visit});
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};

export const checkTotalKilometerSelected = (user, date) => async dispatch => {
  const url = `${API_HOST.url}/report/check-km/${user}`;
  await axios
    .get(url, {
      params: {
        month: date,
      },
    })
    .then(response => {
      dispatch({type: 'SET_TOTAL_KILOMETER', value: response?.data?.total_km});
      dispatch({type: 'SET_TOTAL_VISIT', value: response?.data?.visit});
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};
