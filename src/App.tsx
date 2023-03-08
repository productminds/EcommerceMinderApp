import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigators/MainNavigator';
import {Provider as PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
