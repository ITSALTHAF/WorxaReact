import React, { useState, useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { styles } from './EditProfileScreen.styles';

const EditProfileScreen = ({ navigation, route }) => {
  const { profile } = route.params || {};
  
  // Initialize state ONCE with useMemo to prevent re-initialization
  const [formData, setFormData] = useState(useMemo(() => ({
    name: profile?.name || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    location: profile?.location || '',
    profession: profile?.profession || '',
    experience: profile?.experience || '',
  }), [])); // Empty dependency array - initialize ONCE only

  const [loading, setLoading] = useState(false);

  // Stable input handler - NO re-renders on keystroke
  const handleInputChange = useCallback((field) => (value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []); // Empty dependency array - function NEVER changes

  const handleSave = useCallback(async () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      Alert.alert('Error', 'Name and email are required');
      return;
    }

    setLoading(true);
    
    try {
      // TODO: API call to update profile
      setTimeout(() => {
        setLoading(false);
        Alert.alert('Success', 'Profile updated successfully', [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]);
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Failed to update profile');
    }
  }, [formData.name, formData.email, navigation]);

  // Memoized header to prevent re-renders
  const Header = useMemo(() => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Edit Profile</Text>
      <TouchableOpacity onPress={handleSave} disabled={loading}>
        <Text style={[styles.saveButton, loading && styles.disabledButton]}>
          {loading ? 'Saving...' : 'Save'}
        </Text>
      </TouchableOpacity>
    </View>
  ), [navigation, handleSave, loading]);

  return (
    <SafeAreaView style={styles.container}>
      {Header}

      <KeyboardAvoidingView 
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
      >
        <ScrollView 
          style={styles.form} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none" // CRITICAL - prevents keyboard dismissal
        >
          <View style={styles.formGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={handleInputChange('name')} // Stable function reference
              placeholder="Enter your full name"
              placeholderTextColor="#888"
              returnKeyType="next"
              blurOnSubmit={false} // Prevents keyboard dismissal
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={handleInputChange('email')}
              placeholder="Enter your email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={formData.phone}
              onChangeText={handleInputChange('phone')}
              placeholder="Enter your phone number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              value={formData.location}
              onChangeText={handleInputChange('location')}
              placeholder="Enter your location"
              placeholderTextColor="#888"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Profession</Text>
            <TextInput
              style={styles.input}
              value={formData.profession}
              onChangeText={handleInputChange('profession')}
              placeholder="Enter your profession"
              placeholderTextColor="#888"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Years of Experience</Text>
            <TextInput
              style={styles.input}
              value={formData.experience}
              onChangeText={handleInputChange('experience')}
              placeholder="e.g., 5 years"
              placeholderTextColor="#888"
              returnKeyType="done"
              blurOnSubmit={false}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default React.memo(EditProfileScreen); // Memo the entire component
