import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import JobSearchScreen from '../screens/JobSearchScreen/JobSearchScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import BookingScreen from '../screens/BookingScreen/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#667eea',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#0a0a0a',
          borderTopColor: '#1a1a1a',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let emoji = '❓';
          
          switch (route.name) {
            case 'Home':
              emoji = '🏠';
              break;
            case 'Jobs':
              emoji = '💼';
              break;
            case 'Messages':
              emoji = '💬';
              break;
            case 'Bookings':
              emoji = '📅';
              break;
            case 'Profile':
              emoji = '👤';
              break;
          }

          return (
            <Text style={{ fontSize: size || 24, color, textAlign: 'center' }}>
              {emoji}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Jobs" component={JobSearchScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Bookings" component={BookingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
