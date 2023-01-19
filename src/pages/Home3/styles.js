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
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
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

  headerTitle: {
    paddingHorizontal: 24,
    flexDirection: 'column',
  },
  welcomeTitle: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 16,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#444444',
    fontWeight: 'bold',
    marginLeft: 2,
  },
  headerPadding: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleMargin: {
    paddingHorizontal: 24,
    marginLeft: 2,
    color: '#444444',
    marginBottom: 16,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000004C',
  },
  modalPop: {
    paddingTop: 27,
    paddingHorizontal: 14,
    width: 242,
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  modalText: {
    fontSize: 14,
    color: '#444444',
    fontFamily: 'Roboto-Regular',
  },
  footerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonModal: {
    paddingTop: 10,
    marginTop: 20,
    paddingBottom: 8,
    paddingHorizontal: 38,
    borderTopColor: '#C2C2C2',
    borderTopWidth: 0.5,
  },
  buttonModalText: {
    color: '#444444',
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
  },
  pageButton: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  paddingOnly: {
    paddingHorizontal: 24,
    position: 'relative',
    width: '100%',
    bottom: -20,

    // flex: 2,
  },

  containerLocation: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },

  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    position: 'absolute',
    bottom: 80,
  },

  buttonText: {
    fontSize: 30,
    color: '#FFF',
  },
});
export default styles;
