import axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';
import {Platform} from 'react-native';

export const offlineSubmit = (user, remark, status) => async dispatch => {
  dispatch(setLoading(true));
  const data = {
    user_name: user?.username,
    departement: user?.departement_name,
    area: user?.area_name,
    remark: remark,
  };

  const URL = `${API_HOST.url}/report/driver-off`;
  const URL_UPDATE = `${API_HOST.url}/user/delete/${user?.uuid}`;
  console.log(status, 'from offline submit');

  dispatch({type: 'SET_MODAL_REMARK', value: false});
  dispatch({type: 'SET_MODAL_CONFIRM', value: false});
  await axios
    .post(URL, data)
    .then(async response => {
      showMessage(`Update Success`, 'success');
      await axios
        .patch(URL_UPDATE, {
          is_active: false,
        })
        .then(() => {
          dispatch({type: 'SET_IS_ENABLED', value: false});
        })
        .catch(error => {
          console.log(error);
          showMessage(`Something went wrong`, 'danger');
        });
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1500);
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
      dispatch(setLoading(false));
    });
};

export const onlineSubmit = user => async dispatch => {
  dispatch(setLoading(true));
  const URL_UPDATE = `${API_HOST.url}/user/delete/${user?.uuid}`;

  await axios
    .patch(URL_UPDATE, {
      is_active: true,
    })
    .then(() => {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1500);
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};
