import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './JobDetailsScreen.styles';

const JobDetailsScreen = ({ route, navigation }) => {
  const { job } = route.params;

  const handleApplyPress = () => {
    navigation.navigate('ApplyJob', { job });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.category}>{job.category}</Text>
        <Text style={styles.budget}>{job.budget}</Text>
        <Text style={styles.location}>{job.location || 'Location not provided'}</Text>
        <Text style={styles.description}>{job.description}</Text>

        {/* Additional info (client, images etc.) can be added here */}

        <TouchableOpacity style={styles.applyButton} onPress={handleApplyPress}>
          <Text style={styles.applyButtonText}>Apply for this Job</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetailsScreen;
