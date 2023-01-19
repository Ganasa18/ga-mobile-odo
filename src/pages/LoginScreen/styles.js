import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A4878',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  logo: {
    marginTop: -50,
  },
  cardContainer: {
    width: 312,
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },

  titleCard: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    lineHeight: 28,
    color: '#2A4878',
    textAlign: 'center',
    marginTop: 36,
  },

  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 18,
    color: '#2A4878',
  },

  containerForm: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'center',
  },
  codeCountry: {
    padding: 8,
    backgroundColor: '#C8D8E2',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#828282',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelCountry: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#444444',
  },

  input: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: '#C8D8E2',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#828282',
    width: 210,
    color: '#444444',
  },

  optionLoginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  labelOption: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 16,
    color: '#828282',
  },

  valueOption: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 16,
    color: '#2A4878',
  },
});

export default styles;
