import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const Colors = {
  primary: '#758BFC',
  secondary: '#BBC6FF',

  white: '#FFFFFF',
  black: '#4F4E4E',

  lightGray: '#F5EEEE',
  gray: '#E3DCDC',
  darkgray: '#B0A9A9',

  transparent: 'transparent',
};

export const Sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  margin: 10,
  margin2: 12,
  margin3: 14,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const Fonts = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: Sizes.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: Sizes.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: Sizes.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: Sizes.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: Sizes.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: Sizes.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: Sizes.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: Sizes.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: Sizes.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: Sizes.body5, lineHeight: 22},
};
