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
