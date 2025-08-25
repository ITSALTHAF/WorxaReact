import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './HomeScreen.styles';

const HomeScreen = ({ navigation }) => {
    const [userRole] = useState('worker'); // TODO: Get from auth context
    const [userName] = useState('Alex'); // TODO: Get from user data

    const handleQuickAction = (action) => {
        switch (action) {
            case 'findJobs':
                navigation.navigate('JobSearch');
                break;
            case 'profile':
                navigation.navigate('Profile');
                break;
            case 'logout':
                navigation.navigate('Welcome');
                break;
            case 'Messages':
                navigation.navigate('Messages');
            case 'Bookings':
                navigation.navigate('Bookings');
                break;
            default:
                console.log('Action:', action);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.greetingText}>Good morning, {userName}! 👋</Text>
                    <Text style={styles.subGreeting}>
                        {userRole === 'worker'
                            ? 'Ready to find your next job?'
                            : 'Ready to hire skilled workers?'}
                    </Text>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>12</Text>
                        <Text style={styles.statLabel}>Jobs Applied</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>$2,450</Text>
                        <Text style={styles.statLabel}>Earnings</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>4.8</Text>
                        <Text style={styles.statLabel}>Rating</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>8</Text>
                        <Text style={styles.statLabel}>Completed</Text>
                    </View>
                </View>

                {/* Quick Actions */}
                <View style={styles.quickActions}>
                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => handleQuickAction('findJobs')}
                    >
                        <Text style={styles.actionBtnText}>💼 Find Jobs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => handleQuickAction('Profile')}
                    >
                        <Text style={styles.actionBtnText}>👤 My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => handleQuickAction('Messages')}
                    >
                        <Text style={styles.actionBtnText}>💬 Messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => handleQuickAction('Bookings')}
                    >
                        <Text style={styles.actionBtnText}>📅 My Bookings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.actionBtn, styles.logoutBtn]}
                        onPress={() => handleQuickAction('logout')}
                    >
                        <Text style={[styles.actionBtnText, styles.logoutBtnText]}>🚪 Logout</Text>
                    </TouchableOpacity>
                </View>

                {/* Recent Activity */}
                <View style={styles.activitySection}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>

                    <View style={styles.activityCard}>
                        <Text style={styles.activityText}>Applied to "Kitchen Sink Repair" job</Text>
                        <Text style={styles.activityTime}>2 hours ago</Text>
                    </View>

                    <View style={styles.activityCard}>
                        <Text style={styles.activityText}>Payment received: $200</Text>
                        <Text style={styles.activityTime}>1 day ago</Text>
                    </View>

                    <View style={styles.activityCard}>
                        <Text style={styles.activityText}>Profile completed ✅</Text>
                        <Text style={styles.activityTime}>2 days ago</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
