import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import MainNavigator from './navigators/MainNavigator';
import {
  configureFonts,
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  MD2Theme,
  MD3Theme,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from './utils/constants/theme';
import {ampli, Environment} from './ampli';
import Config from 'react-native-config';
import {ensureNonNullable} from './utils/ensure-non-nullable';

const fonts = configureFonts({config: {fontFamily: 'Roboto'}});

const CombinedDefaultTheme: NavigationTheme & Partial<MD2Theme | MD3Theme> = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  fonts,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    elevation: {
      ...PaperDefaultTheme.colors.elevation,
    },
    primary: Colors.primary,
    onSurfaceVariant: Colors.primary,
  },
};

function App() {
  ampli.load({
    environment: ensureNonNullable<Environment>(
      Config.AMPLI_DEVELOPMENT as Environment,
    ),
  });

  return (
    <PaperProvider theme={{...NavigationDefaultTheme}}>
      <SafeAreaProvider>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
