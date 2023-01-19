import React from 'react';
import {StatusBar} from 'react-native';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Loading} from './components';
import {useSelector} from 'react-redux';
import store from './redux';
import FlashMessage from 'react-native-flash-message';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Router />
      <FlashMessage position="top" />
      {/* <Loading /> */}
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
