import {Dimensions, NativeModules, Platform, StyleSheet} from 'react-native';
const {StatusBarManager} = NativeModules;

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  containerWork: {
    borderColor: '#C2C2C2',
    width: SCREEN_WIDTH - 40,
    marginHorizontal: 24,
    height: 120,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerStep: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  textProgress: {
    position: 'absolute',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
  },

  workTitleContainer: {
    flexDirection: 'column',
  },
  titleWork: {
    color: '#2A4878',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 18,
    maxWidth: 200,
  },

  subTitleWork: {
    color: '#444444',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    marginTop: 4,
    marginLeft: 2,
  },
});

export default styles;
