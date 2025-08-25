import React from 'react';
import { StatusBar } from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#0a0a0a"
        barStyle="light-content"
        translucent={false}
      />
      <AuthNavigator />
    </>
  );
};

export default App;
