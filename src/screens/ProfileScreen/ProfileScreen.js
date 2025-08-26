import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  Alert,
  Switch 
} from 'react-native';
import { styles } from './ProfileScreen.styles';

const ProfileScreen = ({ navigation }) => {
  const [userRole] = useState('worker'); // TODO: Replace with context/auth data
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    avatar: null,
    location: 'San Francisco, CA',
    joinDate: 'March 2023',
    verified: true,
    // Worker specific data
    profession: 'Professional Plumber',
    experience: '5 years',
    completedJobs: 47,
    rating: 4.9,
    earnings: 12450,
    skills: ['Plumbing', 'Pipe Repair', 'Installation', 'Emergency Repair'],
  });

  const [settings, setSettings] = useState({
    notifications: true,
    locationSharing: true,
    darkMode: true,
    emailUpdates: false,
  });

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', { profile: userProfile });
  };

  const handleAvatarPress = () => {
    Alert.alert(
      'Update Profile Photo',
      'Choose an option',
      [
        { text: 'Camera', onPress: () => console.log('Open Camera') },
        { text: 'Photo Library', onPress: () => console.log('Open Gallery') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => navigation.navigate('Welcome')
        },
      ]
    );
  };

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const MenuItem = ({ icon, title, subtitle, onPress, rightElement, danger = false }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <Text style={styles.menuIcon}>{icon}</Text>
        <View style={styles.menuTextContainer}>
          <Text style={[styles.menuTitle, danger && styles.dangerText]}>{title}</Text>
          {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      {rightElement || <Text style={styles.menuArrow}>›</Text>}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <TouchableOpacity style={styles.avatarContainer} onPress={handleAvatarPress}>
            {userProfile.avatar ? (
              <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>{userProfile.name.charAt(0)}</Text>
              </View>
            )}
            <View style={styles.avatarEditIcon}>
              <Text style={styles.editIcon}>📷</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userProfile.name}</Text>
            <Text style={styles.profileRole}>{userProfile.profession}</Text>
            
            {userProfile.verified && (
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedIcon}>✓</Text>
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section (Worker Only) */}
        {userRole === 'worker' && (
          <View style={styles.statsSection}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userProfile.completedJobs}</Text>
              <Text style={styles.statLabel}>Jobs Done</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userProfile.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>${userProfile.earnings.toLocaleString()}</Text>
              <Text style={styles.statLabel}>Earned</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userProfile.experience}</Text>
              <Text style={styles.statLabel}>Experience</Text>
            </View>
          </View>
        )}

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <MenuItem
            icon="👤"
            title="Personal Information"
            subtitle="Name, email, phone number"
            onPress={() => navigation.navigate('PersonalInfo')}
          />
          
          <MenuItem
            icon="📍"
            title="Location & Availability"
            subtitle={userProfile.location}
            onPress={() => navigation.navigate('LocationSettings')}
          />
          
          <MenuItem
            icon="💳"
            title="Payment Methods"
            subtitle="Cards and payment options"
            onPress={() => navigation.navigate('PaymentMethods')}
          />

          {userRole === 'worker' && (
            <>
              <MenuItem
                icon="🔧"
                title="Skills & Services"
                subtitle={`${userProfile.skills.length} skills added`}
                onPress={() => navigation.navigate('SkillsManagement')}
              />
              
              <MenuItem
                icon="📊"
                title="Portfolio"
                subtitle="Your work samples"
                onPress={() => navigation.navigate('Portfolio')}
              />
            </>
          )}
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          <MenuItem
            icon="🔔"
            title="Notifications"
            subtitle={settings.notifications ? 'On' : 'Off'}
            rightElement={
              <Switch
                value={settings.notifications}
                onValueChange={(value) => handleSettingChange('notifications', value)}
                trackColor={{ false: '#767577', true: '#667eea' }}
                thumbColor={settings.notifications ? '#ffffff' : '#f4f3f4'}
              />
            }
          />
          
          <MenuItem
            icon="📍"
            title="Location Sharing"
            subtitle={settings.locationSharing ? 'Enabled' : 'Disabled'}
            rightElement={
              <Switch
                value={settings.locationSharing}
                onValueChange={(value) => handleSettingChange('locationSharing', value)}
                trackColor={{ false: '#767577', true: '#667eea' }}
                thumbColor={settings.locationSharing ? '#ffffff' : '#f4f3f4'}
              />
            }
          />
          
          <MenuItem
            icon="🌙"
            title="Dark Mode"
            subtitle={settings.darkMode ? 'On' : 'Off'}
            rightElement={
              <Switch
                value={settings.darkMode}
                onValueChange={(value) => handleSettingChange('darkMode', value)}
                trackColor={{ false: '#767577', true: '#667eea' }}
                thumbColor={settings.darkMode ? '#ffffff' : '#f4f3f4'}
              />
            }
          />
          
          <MenuItem
            icon="🌐"
            title="Language"
            subtitle="English"
            onPress={() => navigation.navigate('LanguageSettings')}
          />
        </View>

        {/* Privacy & Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy & Security</Text>
          
          <MenuItem
            icon="🔒"
            title="Privacy Settings"
            subtitle="Control your data"
            onPress={() => navigation.navigate('PrivacySettings')}
          />
          
          <MenuItem
            icon="🛡️"
            title="Security"
            subtitle="Password and verification"
            onPress={() => navigation.navigate('SecuritySettings')}
          />
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          <MenuItem
            icon="❓"
            title="Help Center"
            subtitle="FAQs and guides"
            onPress={() => navigation.navigate('HelpCenter')}
          />
          
          <MenuItem
            icon="💬"
            title="Contact Support"
            subtitle="Get help from our team"
            onPress={() => navigation.navigate('ContactSupport')}
          />
          
          <MenuItem
            icon="⭐"
            title="Rate WorkerPro"
            subtitle="Share your feedback"
            onPress={() => console.log('Rate app')}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>WorkerPro v1.0.0</Text>
          <Text style={styles.joinDate}>Member since {userProfile.joinDate}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
