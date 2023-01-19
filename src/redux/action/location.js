import axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const getDataLocation = type => async dispatch => {
  dispatch(setLoading(true));
  const url = `${API_HOST.url}/location/`;
  await axios
    .get(url)
    .then(response => {
      let locationData = response.data.data?.locations;
      //   console.log(locationData);
      dispatch({type: 'SET_LOCATION_DATA', value: locationData});
      dispatch(setLoading(false));
    })
    .catch(error => {
      console.log(error);
    });
};

export const filterLocationByCategory = (data, type) => async dispatch => {
  let selectedCategory = data;
  selectedCategory = selectedCategory.filter(
    item => item.type_location.toLowerCase() == type.toLowerCase(),
  );
  dispatch({type: 'SET_LOCATION_BY_CATEGORY', value: selectedCategory});
};
