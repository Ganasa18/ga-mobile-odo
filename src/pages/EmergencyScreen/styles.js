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
    color: '#444444',
    marginTop: 20,
    marginLeft: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },

  containerEmergency: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    alignItems: 'center',
    position: 'relative',
  },

  containerButtonEmergency: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#2A4878',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },

  textIcon: {
    fontFamily: 'Roboto-Bold',
    color: '#444444',
    fontSize: 18,
    lineHeight: 21,
    position: 'relative',
    zIndex: 1,
  },

  iconEmergency: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    position: 'relative',
    zIndex: 1,
  },

  ring: {
    position: 'absolute',
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#2A4878',
  },

  containerTextTitle: {
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 16,
    color: '#444444',
    position: 'relative',
    zIndex: 1,
  },
});

export default styles;
