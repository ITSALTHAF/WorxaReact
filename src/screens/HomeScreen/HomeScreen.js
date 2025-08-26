import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './HomeScreen.styles';

const HomeScreen = ({ navigation }) => {
  const [userRole] = useState('worker');
  const [userName] = useState('Alex');

  const handleQuickAction = (action) => {
    switch (action) {
      case 'findJobs':
        navigation.navigate('Jobs');
        break;
      case 'profile':
        navigation.navigate('Profile');
        break;
      case 'messages':
        navigation.navigate('Messages');
        break;
      case 'bookings':
        navigation.navigate('Bookings');
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{userName.charAt(0)}</Text>
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>Good morning</Text>
              <Text style={styles.userName}>{userName} 👋</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Stats Overview */}
        <View style={styles.statsOverview}>
          <View style={styles.primaryStat}>
            <Text style={styles.primaryStatValue}>$2,450</Text>
            <Text style={styles.primaryStatLabel}>Total Earnings</Text>
          </View>
          <View style={styles.secondaryStats}>
            <View style={styles.secondaryStat}>
              <Text style={styles.secondaryStatValue}>12</Text>
              <Text style={styles.secondaryStatLabel}>Applied</Text>
            </View>
            <View style={styles.secondaryStat}>
              <Text style={styles.secondaryStatValue}>4.8</Text>
              <Text style={styles.secondaryStatLabel}>Rating</Text>
            </View>
            <View style={styles.secondaryStat}>
              <Text style={styles.secondaryStatValue}>8</Text>
              <Text style={styles.secondaryStatLabel}>Completed</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard} onPress={() => handleQuickAction('findJobs')}>
              <View style={[styles.actionIcon, { backgroundColor: '#667eea' }]}>
                <Text style={styles.actionIconText}>💼</Text>
              </View>
              <Text style={styles.actionLabel}>Find Jobs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} onPress={() => handleQuickAction('messages')}>
              <View style={[styles.actionIcon, { backgroundColor: '#06d6a0' }]}>
                <Text style={styles.actionIconText}>💬</Text>
              </View>
              <Text style={styles.actionLabel}>Messages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} onPress={() => handleQuickAction('bookings')}>
              <View style={[styles.actionIcon, { backgroundColor: '#f72585' }]}>
                <Text style={styles.actionIconText}>📅</Text>
              </View>
              <Text style={styles.actionLabel}>Bookings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} onPress={() => handleQuickAction('profile')}>
              <View style={[styles.actionIcon, { backgroundColor: '#ffbe0b' }]}>
                <Text style={styles.actionIconText}>👤</Text>
              </View>
              <Text style={styles.actionLabel}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>
          <View style={styles.activityHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={styles.activityIconContainer}>
                <Text style={styles.activityIcon}>💼</Text>
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>Applied to Kitchen Sink Repair</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
              <Text style={styles.activityStatus}>Pending</Text>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityIconContainer}>
                <Text style={styles.activityIcon}>💰</Text>
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>Payment received</Text>
                <Text style={styles.activityTime}>1 day ago</Text>
              </View>
              <Text style={[styles.activityStatus, { color: '#22c55e' }]}>+$200</Text>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityIconContainer}>
                <Text style={styles.activityIcon}>✅</Text>
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>Profile completed</Text>
                <Text style={styles.activityTime}>2 days ago</Text>
              </View>
              <Text style={[styles.activityStatus, { color: '#22c55e' }]}>Done</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
