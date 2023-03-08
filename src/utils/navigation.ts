import HomeNavigator from '../navigators/HomeNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import {BadParametersException} from './exceptions/bad-parameters.exception';

export type Routes = 'Home' | 'Profile' | 'Signin' | 'Signup';

const RoutesMapper: Record<Routes, () => JSX.Element> = {
  Home: HomeNavigator,
  Profile: ProfileScreen,

  Signin: SigninScreen,
  Signup: SignupScreen,
};

type CreateNavigatorParamsOutput<T extends Partial<Record<Routes, unknown>>> = {
  name: keyof T;
  component: () => JSX.Element;
};

export const createNavigatorParams = <
  T extends Partial<Record<Routes, unknown>>,
>(
  route: keyof T,
): CreateNavigatorParamsOutput<T> => {
  const component = RoutesMapper[route as Routes];

  if (!component) {
    throw new BadParametersException(
      `Is not possible to found a screen for this route: ${String(route)}`,
    );
  }

  return {
    name: route as keyof T,
    component,
  };
};
