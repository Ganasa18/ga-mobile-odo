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
    position: 'relative',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C2C2C2',
  },
  containerBack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
  },

  headerName: {
    color: '#444444',
    marginTop: 20,
    marginLeft: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },

  container: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#C2C2C2',
  },

  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },

  categoryTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
  },
});
export default styles;
