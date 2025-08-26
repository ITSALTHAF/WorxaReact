import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './BookingScreen.styles';

const MOCK_BOOKINGS = [
  {
    id: '1',
    jobTitle: 'Fix Kitchen Leak',
    userName: 'Maria Santos',
    date: 'Aug 30, 3:00 PM',
    status: 'Confirmed',
  },
  {
    id: '2',
    jobTitle: 'Install Ceiling Fan',
    userName: 'Robert Chen',
    date: 'Sep 1, 10:00 AM',
    status: 'Pending',
  },
  {
    id: '3',
    jobTitle: 'Bathroom Repair',
    userName: 'Sarah Johnson',
    date: 'Aug 25, 9:00 AM',
    status: 'Completed',
  },
];

const BookingScreen = () => {
  const [selectedStatus, setSelectedStatus] = useState('Active');
  const navigation = useNavigation();

  const statuses = ['Active', 'Completed', 'Cancelled'];

  const filteredBookings = MOCK_BOOKINGS.filter(booking => {
    if (selectedStatus === 'Active') {
      return booking.status === 'Confirmed' || booking.status === 'Pending';
    }
    return booking.status === selectedStatus;
  });

  const renderBooking = ({ item }) => (
    <TouchableOpacity
      style={styles.bookingCard}
      onPress={() => navigation.navigate('BookingDetail', { booking: item })}
    >
      <Text style={styles.jobTitle}>{item.jobTitle}</Text>
      <Text style={styles.userName}>With: {item.userName}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={[styles.status, item.status === 'Confirmed' ? styles.statusConfirmed : null]}>
        {item.status}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusTabs}>
        {statuses.map(status => (
          <TouchableOpacity
            key={status}
            style={[styles.tabButton, selectedStatus === status ? styles.tabButtonSelected : null]}
            onPress={() => setSelectedStatus(status)}
          >
            <Text style={[styles.tabButtonText, selectedStatus === status ? styles.tabButtonTextSelected : null]}>
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBookings}
        keyExtractor={item => item.id}
        renderItem={renderBooking}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No bookings found.</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default BookingScreen;
