import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestHomeScreen from '../../../../src/screens/TestHomeScreen';
import TestLoginScreen from '../../../../src/screens/TestLoginScreen';

const Stack = createStackNavigator();

const TestNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TestHome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#667eea',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen 
          name="TestHome" 
          component={TestHomeScreen}
          options={{ title: 'Home - Phase 3' }}
        />
        <Stack.Screen 
          name="TestLogin" 
          component={TestLoginScreen}
          options={{ title: 'Login - Phase 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TestNavigator;
