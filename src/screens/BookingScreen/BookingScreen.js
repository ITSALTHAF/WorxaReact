import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './BookingScreen.styles';

const MOCK_BOOKINGS = [
  {
    id: '1',
    jobTitle: 'Fix Kitchen Sink Leak',
    userName: 'Maria Santos',
    dateTime: 'Aug 30, 3:00 PM',
    status: 'Confirmed',
  },
  {
    id: '2',
    jobTitle: 'Install Ceiling Fan',
    userName: 'Robert Chen',
    dateTime: 'Sep 1, 10:00 AM',
    status: 'Pending',
  },
  {
    id: '3',
    jobTitle: 'Bathroom Tile Repair',
    userName: 'Sarah Johnson',
    dateTime: 'Aug 25, 9:00 AM',
    status: 'Completed',
  },
];

const statuses = ['Active', 'Completed', 'Cancelled'];

const BookingScreen = () => {
  const [selectedStatus, setSelectedStatus] = useState('Active');

  const filteredBookings = MOCK_BOOKINGS.filter(booking => {
    if (selectedStatus === 'Active') {
      return booking.status === 'Confirmed' || booking.status === 'Pending';
    }
    return booking.status === selectedStatus;
  });

  const renderBooking = ({ item }) => (
  <TouchableOpacity onPress={() => navigation.navigate('BookingDetail', { booking: item })}>
    <View style={styles.bookingCard}>
      <Text style={styles.jobTitle}>{item.jobTitle}</Text>
      <Text style={styles.userName}>With: {item.userName}</Text>
      <Text style={styles.dateTime}>{item.dateTime}</Text>
      <Text style={[styles.status, item.status === 'Confirmed' && styles.statusConfirmed]}>
        {item.status}
      </Text>
    </View>
  </TouchableOpacity>
);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusTabs}>
        {statuses.map(status => (
          <TouchableOpacity
            key={status}
            style={[
              styles.tabButton,
              selectedStatus === status && styles.tabButtonSelected,
            ]}
            onPress={() => setSelectedStatus(status)}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedStatus === status && styles.tabButtonTextSelected,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBookings}
        keyExtractor={item => item.id}
        renderItem={renderBooking}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No bookings found.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default BookingScreen;
