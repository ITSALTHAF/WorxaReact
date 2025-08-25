import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JobListScreen from '../screens/jobs/JobListScreen';
import JobSearchScreen from '../screens/jobs/JobSearchScreen';
import MyJobsScreen from '../screens/jobs/MyJobsScreen';

const Stack = createStackNavigator();

const JobsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#667eea' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="JobList" 
        component={JobListScreen}
        options={{ title: 'Browse Jobs' }}
      />
      <Stack.Screen 
        name="JobSearch" 
        component={JobSearchScreen}
        options={{ title: 'Search Jobs' }}
      />
      <Stack.Screen 
        name="MyJobs" 
        component={MyJobsScreen}
        options={{ title: 'My Jobs' }}
      />
    </Stack.Navigator>
  );
};

export default JobsNavigator;
