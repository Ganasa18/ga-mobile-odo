import {StyleSheet, Dimensions, Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 30,
    paddingTop: STATUSBAR_HEIGHT,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    lineHeight: 21,
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: '#444444',
  },

  subtitle: {
    lineHeight: 25,
    fontSize: 16,
    fontFamily: 'Roboto-Regular,',
    color: '#444444',
    maxWidth: 200,
    textAlign: 'center',
  },
  buttonContainer: {
    width: 133,
  },
});
export default styles;
