import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Colors } from '../styles/SharedStyles';

// Import screen components (we'll create these)
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import JobsScreen from '../screens/JobsScreen/JobsScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import BookingsScreen from '../screens/BookingsScreen/BookingsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Icon Component
const TabIcon = ({ focused, iconText, label }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Text style={{
      fontSize: 20,
      color: focused ? Colors.primary : Colors.textSecondary,
      marginBottom: 2,
    }}>
      {iconText}
    </Text>
    <Text style={{
      fontSize: 10,
      fontWeight: '500',
      color: focused ? Colors.primary : Colors.textSecondary,
    }}>
      {label}
    </Text>
  </View>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.cardBackground,
          borderTopColor: 'rgba(255, 255, 255, 0.1)',
          borderTopWidth: 1,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconText="🏠" label="Home" />
          ),
        }}
      />
      <Tab.Screen 
        name="Jobs" 
        component={JobsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconText="💼" label="Jobs" />
          ),
        }}
      />
      <Tab.Screen 
        name="Messages" 
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconText="💬" label="Messages" />
          ),
        }}
      />
      <Tab.Screen 
        name="Bookings" 
        component={BookingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconText="📅" label="Bookings" />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconText="👤" label="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
