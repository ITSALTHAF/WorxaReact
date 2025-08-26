import React, { useState, useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  Switch,
  Alert,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { styles } from './SecuritySettingsScreen.styles';

const SecuritySettingsScreen = ({ navigation }) => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    biometricLogin: false,
    loginNotifications: true,
    sessionTimeout: true,
  });

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSettingChange = useCallback((setting, value) => {
    setSecuritySettings(prev => ({
      ...prev,
      [setting]: value
    }));
  }, []);

  const handlePasswordChange = useCallback((field) => (value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const togglePasswordModal = useCallback(() => {
    setShowChangePasswordModal(prev => !prev);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  }, []);

  const handleChangePassword = useCallback(() => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      Alert.alert('Error', 'Please fill in all password fields');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      Alert.alert('Error', 'New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long');
      return;
    }

    // TODO: Implement password change API call
    Alert.alert('Success', 'Password changed successfully', [
      { text: 'OK', onPress: togglePasswordModal }
    ]);
  }, [passwordData, togglePasswordModal]);

  const MenuItem = useCallback(({ icon, title, subtitle, onPress, rightElement, showArrow = true }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <Text style={styles.menuIcon}>{icon}</Text>
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuTitle}>{title}</Text>
          {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      {rightElement || (showArrow && <Text style={styles.menuArrow}>›</Text>)}
    </TouchableOpacity>
  ), []);

  const Header = useMemo(() => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Security</Text>
      <View style={styles.placeholder} />
    </View>
  ), [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {Header}

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Password Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Password & Authentication</Text>
          
          <MenuItem
            icon="🔑"
            title="Change Password"
            subtitle="Update your account password"
            onPress={togglePasswordModal}
          />

          <MenuItem
            icon="🔒"
            title="Two-Factor Authentication"
            subtitle={securitySettings.twoFactorAuth ? 'Enabled' : 'Disabled'}
            rightElement={
              <Switch
                value={securitySettings.twoFactorAuth}
                onValueChange={(value) => handleSettingChange('twoFactorAuth', value)}
                trackColor={{ false: '#767577', true: '#667eea' }}
                thumbColor={securitySettings.twoFactorAuth ? '#ffffff' : '#f4f3f4'}
              />
            }
            showArrow={false}
          />

          <MenuItem
            icon="👆"
            title="Biometric Login"
            subtitle={securitySettings.biometricLogin ? 'Enabled' : 'Disabled'}
            rightElement={
              <Switch
                value={securitySettings.biometricLogin}
                onValueChange={(value) => handleSettingChange('biometricLogin', value)}
                trackColor={{ false: '#767577', true: '#667eea' }}
                thumbColor={securitySettings.biometricLogin ? '#ffffff' : '#f4f3f4'}
              />
            }
            showArrow={false}
          />
        </View>

        {/* Session Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Session Security</Text>
          
          <MenuItem
            icon="🔔"
            title="Login Notifications"
            subtitle={securitySettings.loginNotifications ? 'Enabled' : 'Disabled'}
            rightElement={
              <Switch
                value={securitySettings.loginNotifications}
                onValueChange={(value) => handleSettingChange('loginNotifications', value)}
                trackColor={{ false: '#767577', true: '#667eea' }}
                thumbColor={securitySettings.loginNotifications ? '#ffffff' : '#f4f3f4'}
              />
            }
            showArrow={false}
          />

          <MenuItem
            icon="⏱️"
            title="Auto-Logout"
            subtitle={securitySettings.sessionTimeout ? 'After 30 minutes' : 'Disabled'}
            rightElement={
              <Switch
                value={securitySettings.sessionTimeout}
                onValueChange={(value) => handleSettingChange('sessionTimeout', value)}
                trackColor={{ false: '#767577', true: '#667eea' }}
                thumbColor={securitySettings.sessionTimeout ? '#ffffff' : '#f4f3f4'}
              />
            }
            showArrow={false}
          />

          <MenuItem
            icon="📱"
            title="Active Sessions"
            subtitle="Manage logged-in devices"
            onPress={() => Alert.alert('Info', 'Active sessions management coming soon')}
          />
        </View>

        {/* Account Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Actions</Text>
          
          <MenuItem
            icon="📥"
            title="Download My Data"
            subtitle="Export your account information"
            onPress={() => Alert.alert('Info', 'Data export feature coming soon')}
          />

          <MenuItem
            icon="🗑️"
            title="Delete Account"
            subtitle="Permanently delete your account"
            onPress={() => Alert.alert('Warning', 'Account deletion is permanent. Contact support to proceed.')}
          />
        </View>
      </ScrollView>

      {/* Change Password Modal */}
      <Modal
        visible={showChangePasswordModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={togglePasswordModal}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={togglePasswordModal}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Change Password</Text>
            <TouchableOpacity onPress={handleChangePassword}>
              <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView 
            style={styles.modalKeyboardContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <ScrollView 
              style={styles.modalContent}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="none"
            >
              <View style={styles.formGroup}>
                <Text style={styles.label}>Current Password</Text>
                <TextInput
                  style={styles.input}
                  value={passwordData.currentPassword}
                  onChangeText={handlePasswordChange('currentPassword')}
                  placeholder="Enter current password"
                  placeholderTextColor="#888"
                  secureTextEntry
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>New Password</Text>
                <TextInput
                  style={styles.input}
                  value={passwordData.newPassword}
                  onChangeText={handlePasswordChange('newPassword')}
                  placeholder="Enter new password"
                  placeholderTextColor="#888"
                  secureTextEntry
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Confirm New Password</Text>
                <TextInput
                  style={styles.input}
                  value={passwordData.confirmPassword}
                  onChangeText={handlePasswordChange('confirmPassword')}
                  placeholder="Confirm new password"
                  placeholderTextColor="#888"
                  secureTextEntry
                  returnKeyType="done"
                  blurOnSubmit={false}
                />
              </View>

              <View style={styles.passwordRequirements}>
                <Text style={styles.requirementsTitle}>Password Requirements:</Text>
                <Text style={styles.requirementText}>• At least 8 characters long</Text>
                <Text style={styles.requirementText}>• Include uppercase and lowercase letters</Text>
                <Text style={styles.requirementText}>• Include at least one number</Text>
                <Text style={styles.requirementText}>• Include at least one special character</Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default React.memo(SecuritySettingsScreen);
