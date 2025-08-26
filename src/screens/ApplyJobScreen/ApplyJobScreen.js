import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { styles } from './ApplyJobScreen.styles';

const ApplyJobScreen = ({ navigation, route }) => {
  const { job } = route.params;

  const [proposedPrice, setProposedPrice] = useState('');
  const [coverMessage, setCoverMessage] = useState('');
  const [availability, setAvailability] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!proposedPrice.trim() || isNaN(proposedPrice)) {
      Alert.alert('Validation Error', 'Please enter a valid proposed price.');
      return false;
    }
    if (!coverMessage.trim()) {
      Alert.alert('Validation Error', 'Please write a cover message.');
      return false;
    }
    if (!availability.trim()) {
      Alert.alert('Validation Error', 'Please specify your availability.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Application Submitted', 'Your application has been sent to the client.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }, 2000);
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
          editable={!loading}
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
          editable={!loading}
        />

        <Text style={styles.label}>Availability</Text>
        <TextInput
          style={styles.input}
          placeholder="When can you start?"
          placeholderTextColor="#888"
          value={availability}
          onChangeText={setAvailability}
          editable={!loading}
        />

        <TouchableOpacity
          style={[styles.submitBtn, loading && styles.submitBtnDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="white" /> : <Text style={styles.submitBtnText}>Submit Application</Text>}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplyJobScreen;
