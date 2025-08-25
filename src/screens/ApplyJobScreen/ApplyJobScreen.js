import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { styles } from './ApplyJobScreen.styles';

const ApplyJobScreen = ({ navigation, route }) => {
  const { job } = route.params;

  const [proposedPrice, setProposedPrice] = useState('');
  const [coverMessage, setCoverMessage] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSubmit = () => {
    if (!proposedPrice || !coverMessage || !availability) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Simulate submission success
    Alert.alert('Application Submitted', 'Your application has been sent to the client.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Apply for: {job.title}</Text>

        <Text style={styles.label}>Proposed Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your proposed price"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={proposedPrice}
          onChangeText={setProposedPrice}
        />

        <Text style={styles.label}>Cover Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write a message to the client"
          placeholderTextColor="#888"
          multiline
          numberOfLines={4}
          value={coverMessage}
          onChangeText={setCoverMessage}
        />

        <Text style={styles.label}>Availability</Text>
        <TextInput
          style={styles.input}
          placeholder="When can you start?"
          placeholderTextColor="#888"
          value={availability}
          onChangeText={setAvailability}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitBtnText}>Submit Application</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplyJobScreen;
