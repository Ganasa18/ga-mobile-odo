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

  title: {
    fontFamily: 'Roboto-Regular',
    lineHeight: 16,
    fontSize: 14,
    color: '#444444',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 1,
  },

  containerNotif: {
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 1,
    paddingVertical: 16,
  },

  containContainerNotif: {
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  headerContainerNotif: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
    lineHeight: 16,
  },
  headerSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#828282',
    lineHeight: 14,
  },
  containSubtitle: {
    lineHeight: 20,
    maxWidth: 280,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#828282',
  },
});
export default styles;
