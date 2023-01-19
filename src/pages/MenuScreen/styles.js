import {StyleSheet, Dimensions, Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 30,
    paddingTop: STATUSBAR_HEIGHT,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoName: {
    marginLeft: -10,
    fontSize: 18,
    color: '#2A4878',
    fontFamily: 'Roboto-Medium',
  },

  headerContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  welcomeTitle: {
    fontSize: 16,
    color: '#444444',
    fontFamily: 'Roboto-Regular',
  },

  containerDashboard: {
    backgroundColor: '#2A4878',
    width: SCREEN_WIDTH - 40,
    marginHorizontal: 24,
    height: 150,
    borderRadius: 4,
  },

  dasboard: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashboardTitleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  dashboardTitleContainer2: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginRight: 40,
  },

  dateSelect: {
    position: 'absolute',
    top: 0,
    left: 20,
  },

  dateBorder: {
    width: 90,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleDashboard: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Roboto-Medium',
  },
  subTitleDashboard: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Roboto-Medium',
  },

  containerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subTitleDetail: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#FFF',
  },

  containerWork: {
    borderWidth: 1,
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
  },

  subTitleWork: {
    color: '#444444',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    marginTop: 2,
  },
  containerMenu: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardMenu: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 19,
    paddingVertical: 11,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  menuTitle: {
    color: '#2A4878',
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    lineHeight: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000000AA',
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
