import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import RootNavigator from './navigation/RootNavigator';

export default () => {
  return (
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
  );
}