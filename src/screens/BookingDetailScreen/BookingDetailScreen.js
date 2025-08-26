import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './BookingDetailScreen.styles';

const BookingDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { booking } = route.params;

  const handleCancel = () => {
    Alert.alert('Cancel Booking', 'Are you sure you want to cancel this booking?', [
      { text: 'No', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => {
          // Handle cancel booking logic here (e.g., update backend)
          Alert.alert('Booking cancelled.');
          navigation.goBack();
        },
      },
    ]);
  };

  const handleReschedule = () => {
    navigation.navigate('RescheduleBooking', { booking });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{booking.jobTitle}</Text>
        <Text style={styles.status}>{booking.status}</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{booking.date}</Text>
        <Text style={styles.label}>With:</Text>
        <Text style={styles.value}>{booking.userName}</Text>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.actionBtn} onPress={handleReschedule}>
            <Text style={styles.actionBtnText}>Reschedule Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#ef4444' }]} onPress={handleCancel}>
            <Text style={styles.actionBtnText}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingDetailScreen;
