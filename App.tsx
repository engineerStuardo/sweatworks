import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
