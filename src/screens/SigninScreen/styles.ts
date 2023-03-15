import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../utils/constants/theme';

export default StyleSheet.create({
  title: {
    margin: 2 * Sizes.margin,
    ...Fonts.h2,
  },
  logo: {
    borderRadius: 100,
    margin: 2 * Sizes.margin,
    height: 100,
    width: 100,
    backgroundColor: Colors.primary,
  },
  input: {
    width: '80%',
    marginBottom: Sizes.margin2,
  },
  borderInput: {
    borderColor: Colors.primary,
    borderRadius: 15,
    borderWidth: 1,
  },
  primaryColorText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  forgotPassword: {
    width: '80%',
    alignItems: 'flex-end',
  },
  signInButton: {
    height: 60,
    justifyContent: 'center',
    marginBottom: Sizes.margin,
    backgroundColor: Colors.primary,
  },
  buttonContainer: {
    width: '80%',
  },
  googleLogo: {
    height: 30,
    width: 30,
  },
  googleContainer: {
    marginTop: Sizes.margin,
    padding: Sizes.margin / 2,
    backgroundColor: Colors.gray,
    borderRadius: 12,
  },
  container: {
    height: '100%',
    backgroundColor: Colors.white,
    width: '100%',
  },
  subcontainer: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    padding: Sizes.margin,
    width: '100%',
  },
  subcontainerHorizontal: {
    width: '100%',
    // margin: SIZES.margin,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-evenly',
  },
});
