import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signInAction = (numberPhone, navigation) => async dispatch => {
  //   dispatch(setLoading(true));
  dispatch({type: 'SET_LOGIN_BUTTON', value: false});
  let number = numberPhone;

  if (number?.charAt(0) === '8') {
    number = `0${number}`;
  }
  await Axios.post(`${API_HOST.url}/user/login-mobile`, {
    phoneNumber: number,
  })
    .then(response => {
      storeData('token', {value: 'token'});
      storeData('userData', {value: response.data?.data?.data_user[0]});
      showMessage(`Success Login`, 'success');
      setTimeout(() => {
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      }, 1500);
    })
    .catch(error => {
      console.log(error.response);
      showMessage(`Failure To Login`, 'danger');
      dispatch({type: 'SET_LOGIN_BUTTON', value: true});
      // ADD THIS THROW error
      throw error;
    });
};

export const resignInAction = numberPhone => async dispatch => {
  await Axios.post(`${API_HOST.url}/user/login-mobile`, {
    phoneNumber: numberPhone,
  })
    .then(response => {
      storeData('token', {value: 'token'});
      storeData('userData', {value: response.data?.data?.user});
    })
    .catch(error => {
      // console.log(error.response);
      showMessage(`Failure To Login`, 'danger');
    });
};

export const checkStatusUser = id_user => async dispatch => {
  await Axios.get(`${API_HOST.url}/user/check-user-is-active/${id_user}`)
    .then(response => {
      const statusUser = response.data?.data?.status_user[0]?.is_active;
      dispatch({type: 'SET_USER_OFFLINE', value: statusUser});
      dispatch(setLoading(false));
      dispatch({type: 'SET_IS_ENABLED', value: statusUser});
    })
    .catch(error => {
      showMessage(`Failure To Check Status`, 'danger');
    });
};
