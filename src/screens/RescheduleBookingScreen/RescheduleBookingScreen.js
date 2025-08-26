import React, { useState } from 'react';
import { SafeAreaView, Text, Button, Alert, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './RescheduleBookingScreen.styles';

const RescheduleBookingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { booking } = route.params;

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  const handleSubmit = () => {
    Alert.alert('Booking rescheduled', `New date: ${date.toLocaleString()}`, [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reschedule Booking for {booking.jobTitle}</Text>

      <Button title="Pick Date & Time" onPress={showDateTimePicker} />

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onChange}
        />
      )}

      <Button title="Submit New Date" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default RescheduleBookingScreen;
