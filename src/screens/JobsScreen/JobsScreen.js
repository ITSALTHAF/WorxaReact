import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { SharedStyles, Colors, FontSizes } from '../../styles/SharedStyles';

const JobsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={SharedStyles.container}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ 
          fontSize: FontSizes.title, 
          color: Colors.primary, 
          fontWeight: '700', 
          marginBottom: 20,
          textAlign: 'center' 
        }}>
          💼 Jobs Screen
        </Text>
        
        <Text style={{ 
          fontSize: FontSizes.regular, 
          color: Colors.textSecondary, 
          textAlign: 'center',
          marginBottom: 40 
        }}>
          Job search and posting functionality{'\n'}coming in Phase 5
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            padding: 16,
            borderRadius: 12,
            alignItems: 'center',
            marginBottom: 20
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: Colors.white, fontWeight: '600' }}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default JobsScreen;
