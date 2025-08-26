import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Auth Screens
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import EmailVerificationScreen from '../screens/EmailVerificationScreen/EmailVerificationScreen';

// Main Tabs Navigator
import MainTabNavigator from './MainTabNavigator';

// Detail Screens (including ChatScreen)
import JobDetailsScreen from '../screens/JobDetailsScreen/JobDetailsScreen';
import ApplyJobScreen from '../screens/ApplyJobScreen/ApplyJobScreen';
import BookingDetailScreen from '../screens/BookingDetailScreen/BookingDetailScreen';
import RescheduleBookingScreen from '../screens/RescheduleBookingScreen/RescheduleBookingScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen/PersonalInfoScreen';
import SkillsManagementScreen from '../screens/SkillsManagementScreen/SkillsManagementScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen/PaymentMethodsScreen';
import SecuritySettingsScreen from '../screens/SecuritySettingsScreen/SecuritySettingsScreen';
import PortfolioScreen from '../screens/PortfolioScreen/PortfolioScreen';

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

      {/* Main App Tabs */}
      <Stack.Screen name="Main" component={MainTabNavigator} />

      {/* Detail Screens */}
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      <Stack.Screen name="ApplyJob" component={ApplyJobScreen} />
      <Stack.Screen name="BookingDetail" component={BookingDetailScreen} />
      <Stack.Screen name="RescheduleBooking" component={RescheduleBookingScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SkillsManagement" component={SkillsManagementScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SecuritySettings" component={SecuritySettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
