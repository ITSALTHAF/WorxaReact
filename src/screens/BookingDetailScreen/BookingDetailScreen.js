import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { styles } from './BookingDetailScreen.styles';

const BookingDetailScreen = ({ route, navigation }) => {
  const { booking } = route.params;

  const handleAction = (type) => {
    if (type === 'Cancel') {
      Alert.alert('Booking Cancelled', 'The booking has been cancelled.', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } else if (type === 'Complete') {
      Alert.alert('Booking Completed', 'Marked as done.', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } // Add more as needed
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{booking.jobTitle}</Text>
        <Text style={styles.status}>{booking.status}</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{booking.dateTime}</Text>
        <Text style={styles.label}>With:</Text>
        <Text style={styles.value}>{booking.userName}</Text>
        {/* Add more booking/job/client info as needed */}

        {/* Actions depending on status */}
        {booking.status === 'Confirmed' && (
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => handleAction('Cancel')}
          >
            <Text style={styles.actionBtnText}>Cancel Booking</Text>
          </TouchableOpacity>
        )}
        {booking.status === 'Pending' && (
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => handleAction('Complete')}
          >
            <Text style={styles.actionBtnText}>Mark as Completed</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingDetailScreen;
