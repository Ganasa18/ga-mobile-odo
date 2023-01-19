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

  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  containerBack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
  },

  headerName: {
    marginTop: 20,
    marginLeft: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },

  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paddingOnly: {
    paddingHorizontal: 24,
  },
});
export default styles;
