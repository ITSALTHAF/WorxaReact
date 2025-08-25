import React, { useState } from 'react';
import { 
  SafeAreaView 
} from 'react-native-safe-area-context';
import { 
  View, Text, TextInput, TouchableOpacity, FlatList 
} from 'react-native';
import { styles } from './JobSearchScreen.styles';

const MOCK_JOBS = [
  {
    id: '1',
    title: 'Fix Kitchen Leak',
    category: 'Plumbing',
    budget: '$100 - $150',
    distance: '0.8 miles',
    description: 'Quick fix for leaking kitchen sink.',
    urgency: 'Urgent',
  },
  {
    id: '2',
    title: 'Install Ceiling Fan',
    category: 'Electrical',
    budget: '$120 - $180',
    distance: '1.2 miles',
    description: 'Install a new ceiling fan in living room.',
    urgency: 'Flexible',
  },
  // Add more items as needed
];

const categories = ['All', 'Plumbing', 'Electrical', 'Carpentry', 'HVAC'];

const JobSearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter jobs by selected category and search text
  const filteredJobs = MOCK_JOBS.filter(job =>
    (selectedCategory === 'All' || job.category === selectedCategory) &&
    job.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Render each job as a card with clickable navigation
  const renderJob = ({ item }) => (
    <TouchableOpacity
      style={styles.jobCard}
      onPress={() => navigation.navigate('JobDetails', { job: item })}
    >
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobCategory}>{item.category}</Text>
      <Text style={styles.jobInfo}>{item.budget} • {item.distance} • {item.urgency}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Find Jobs Near You</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search jobs or location"
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
      />

      <View style={styles.categoriesContainer}>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryBtn,
              selectedCategory === cat && styles.categoryBtnSelected,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextSelected,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredJobs}
        keyExtractor={item => item.id}
        renderItem={renderJob}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default JobSearchScreen;
