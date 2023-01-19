import {StyleSheet, Dimensions, Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 30,
    paddingTop: STATUSBAR_HEIGHT - 10,
  },

  containerSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 34,
  },
  containerBack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
  },
  divider: {
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.5,
  },
  paddingRecent: {
    marginHorizontal: 24,
  },
  recentTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
  },
  carContainer: {
    flexDirection: 'column',
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.5,
    marginBottom: 16,
    marginTop: 16,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#444444',
    maxWidth: 250,
    lineHeight: 20,
  },
});
export default styles;
