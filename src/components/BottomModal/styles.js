import {StyleSheet, Dimensions, Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#0000004C',
    position: 'relative',
  },
  modalPop: {
    paddingTop: 27,
    paddingHorizontal: 22,
    width: '100%',
    height: 315,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
    paddingHorizontal: 10,
  },
});

export default styles;
