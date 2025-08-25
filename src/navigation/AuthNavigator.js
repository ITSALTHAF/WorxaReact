import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Auth Screens
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import EmailVerificationScreen from '../screens/EmailVerificationScreen/EmailVerificationScreen';

// Main App Screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import JobSearchScreen from '../screens/JobSearchScreen/JobSearchScreen';
import JobDetailsScreen from '../screens/JobDetailsScreen/JobDetailsScreen';
import ApplyJobScreen from '../screens/ApplyJobScreen/ApplyJobScreen';
import BookingScreen from '../screens/BookingScreen/BookingScreen';
import BookingDetailScreen from '../screens/BookingDetailScreen/BookingDetailScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0a0a0a' },
      }}
    >
      {/* Auth Flow */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />

      {/* Main App Screens */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="JobSearch" component={JobSearchScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      <Stack.Screen name="ApplyJob" component={ApplyJobScreen} />
      <Stack.Screen name="Bookings" component={BookingScreen} />
      <Stack.Screen name="BookingDetail" component={BookingDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
