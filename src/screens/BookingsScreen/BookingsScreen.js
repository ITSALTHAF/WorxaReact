import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { SharedStyles, Colors, FontSizes } from '../../styles/SharedStyles';

const BookingsScreen = () => {
  return (
    <SafeAreaView style={SharedStyles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text
          style={{
            fontSize: FontSizes.title,
            color: Colors.primary,
            fontWeight: '700',
            marginBottom: 10,
          }}
        >
          📅 Bookings Screen
        </Text>
        <Text
          style={{
            fontSize: FontSizes.regular,
            color: Colors.textSecondary,
            textAlign: 'center',
          }}
        >
          Booking management functionality coming in Phase 5
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BookingsScreen;
