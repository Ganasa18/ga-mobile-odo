import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CarsPage,
  CategoryScreen,
  EmergencyScreen,
  Home,
  Home2,
  Home3,
  HomeAdminScreen,
  LocationScreen,
  LoginScreen,
  MenuScreen,
  NotificationScreen,
  ProfileScreen,
  SplashScreen,
  SuccessScreen,
} from '../pages';
import ButtomNavigator from '../components/BottomNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={MenuScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kilometer"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kilometer2"
        component={Home2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kilometer3"
        component={Home3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CarsPage"
        component={CarsPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SucessSubmit"
        component={SuccessScreen}
        options={{headerShown: false}}
      />

      {/* Admin Page */}
      <Stack.Screen
        name="HomeAdmin"
        component={HomeAdminScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
