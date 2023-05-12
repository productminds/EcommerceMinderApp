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
import AuthProvider from './contexts/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import useBraze from './hooks/useBraze';

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

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});

function App() {
  const {init} = useBraze();

  if (!ampli.isLoaded) {
    ampli.load({
      environment: ensureNonNullable<Environment>(
        Config.AMPLI_DEVELOPMENT as Environment,
      ),
    });
  }

  init();

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <PaperProvider theme={{...PaperDefaultTheme}}>
        <SafeAreaProvider>
          <AuthProvider>
            <NavigationContainer theme={CombinedDefaultTheme}>
              <MainNavigator />
            </NavigationContainer>
          </AuthProvider>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default App;
