import {StyleSheet, Dimensions, Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000004C',
    paddingHorizontal: 20,
  },
  modalPop: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    justifyContent: 'space-between',
  },
  textModalClose: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 18,
    color: '#444444',
  },
  iconModalClose: {
    paddingHorizontal: 5,
    paddingVertical: 6,
  },

  modalBody: {
    flex: 1,
    alignItems: 'center',
  },

  modalTitle: {
    textAlign: 'center',
    maxWidth: 200,
    paddingHorizontal: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#444444',
    lineHeight: 18,
  },
  modalSubTitle: {
    textAlign: 'left',
    paddingHorizontal: 20,
    color: '#787878',
    fontFamily: 'Roboto-Regular',
    lineHeight: 18,
  },

  footerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopColor: '#C2C2C2',
    borderTopWidth: 1,
  },
  buttonModal: {
    paddingHorizontal: 70,
  },
  buttonModalText: {
    color: '#444444',
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    // textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginHorizontal: 20,
  },
});

export default styles;
