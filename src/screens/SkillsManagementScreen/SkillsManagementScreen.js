import React, { useState, useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  TextInput,
  Alert,
  Modal,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { styles } from './SkillsManagementScreen.styles';

// Memoized SkillCard with stable props
const SkillCard = React.memo(({ skill, onRemove }) => {
  const handleRemove = useCallback(() => {
    onRemove(skill.id);
  }, [skill.id, onRemove]);

  return (
    <View style={styles.skillCard}>
      <View style={styles.skillHeader}>
        <View style={styles.skillInfo}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <Text style={styles.skillLevel}>{skill.level} • {skill.rate}</Text>
        </View>
        <TouchableOpacity 
          style={styles.removeButton}
          onPress={handleRemove}
        >
          <Text style={styles.removeIcon}>×</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const SkillsManagementScreen = ({ navigation }) => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'Plumbing', level: 'Expert', rate: '$60/hr' },
    { id: 2, name: 'Pipe Repair', level: 'Expert', rate: '$55/hr' },
    { id: 3, name: 'Installation', level: 'Intermediate', rate: '$45/hr' },
    { id: 4, name: 'Emergency Repair', level: 'Expert', rate: '$75/hr' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newSkill, setNewSkill] = useState(useMemo(() => ({
    name: '',
    level: 'Beginner',
    rate: ''
  }), []));

  const skillLevels = useMemo(() => ['Beginner', 'Intermediate', 'Advanced', 'Expert'], []);
  const suggestedSkills = useMemo(() => [
    'Electrical Work', 'Carpentry', 'Painting', 'Tile Installation',
    'HVAC', 'Roofing', 'Flooring', 'Drywall', 'Landscaping', 'Cleaning'
  ], []);

  // Stable handlers - no re-renders
  const handleRemoveSkill = useCallback((skillId) => {
    Alert.alert(
      'Remove Skill',
      'Are you sure you want to remove this skill?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Remove', 
          style: 'destructive',
          onPress: () => setSkills(prev => prev.filter(skill => skill.id !== skillId))
        }
      ]
    );
  }, []);

  const handleNewSkillChange = useCallback((field) => (value) => {
    setNewSkill(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSuggestedSkillPress = useCallback((skill) => {
    setNewSkill(prev => ({ ...prev, name: skill }));
  }, []);

  const handleLevelPress = useCallback((level) => {
    setNewSkill(prev => ({ ...prev, level }));
  }, []);

  const handleAddSkill = useCallback(() => {
    if (!newSkill.name.trim() || !newSkill.rate.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const skill = {
      id: Date.now(),
      name: newSkill.name,
      level: newSkill.level,
      rate: newSkill.rate
    };

    setSkills(prev => [...prev, skill]);
    setNewSkill({ name: '', level: 'Beginner', rate: '' });
    setShowAddModal(false);
  }, [newSkill]);

  const toggleModal = useCallback(() => {
    setShowAddModal(prev => !prev);
  }, []);

  // Memoized components to prevent re-renders
  const Header = useMemo(() => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Skills & Services</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>
    </View>
  ), [navigation, toggleModal]);

  const SkillsList = useMemo(() => (
    <View style={styles.skillsGrid}>
      {skills.map((skill) => (
        <SkillCard 
          key={`skill-${skill.id}`} // Stable key prefix
          skill={skill} 
          onRemove={handleRemoveSkill}
        />
      ))}
    </View>
  ), [skills, handleRemoveSkill]);

  return (
    <SafeAreaView style={styles.container}>
      {Header}

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="none" // CRITICAL - prevents keyboard dismissal
      >
        {SkillsList}

        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>💡 Tips for Skills</Text>
          <Text style={styles.helpText}>
            • Be specific about your skills (e.g., "Bathroom Plumbing" instead of just "Plumbing")
          </Text>
          <Text style={styles.helpText}>
            • Set competitive rates based on your experience level
          </Text>
          <Text style={styles.helpText}>
            • Add certifications or specializations to stand out
          </Text>
        </View>
      </ScrollView>

      <Modal
        visible={showAddModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={toggleModal}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Add Skill</Text>
            <TouchableOpacity onPress={handleAddSkill}>
              <Text style={styles.saveButton}>Add</Text>
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView 
            style={styles.modalKeyboardContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <ScrollView 
              style={styles.modalContent}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="none" // CRITICAL
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formGroup}>
                <Text style={styles.label}>Skill Name</Text>
                <TextInput
                  style={styles.input}
                  value={newSkill.name}
                  onChangeText={handleNewSkillChange('name')}
                  placeholder="Enter skill name"
                  placeholderTextColor="#888"
                  returnKeyType="next"
                  blurOnSubmit={false} // CRITICAL
                />
              </View>

              <View style={styles.suggestedSkills}>
                <Text style={styles.suggestedTitle}>Suggested Skills</Text>
                <View style={styles.skillTags}>
                  {suggestedSkills.map((skill, index) => (
                    <TouchableOpacity
                      key={`suggested-${index}-${skill}`} // Stable key
                      style={styles.skillTag}
                      onPress={() => handleSuggestedSkillPress(skill)}
                    >
                      <Text style={styles.skillTagText}>{skill}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Experience Level</Text>
                <View style={styles.levelSelector}>
                  {skillLevels.map((level) => (
                    <TouchableOpacity
                      key={`level-${level}`} // Stable key
                      style={[
                        styles.levelOption,
                        newSkill.level === level && styles.levelOptionSelected
                      ]}
                      onPress={() => handleLevelPress(level)}
                    >
                      <Text style={[
                        styles.levelText,
                        newSkill.level === level && styles.levelTextSelected
                      ]}>
                        {level}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Hourly Rate</Text>
                <TextInput
                  style={styles.input}
                  value={newSkill.rate}
                  onChangeText={handleNewSkillChange('rate')}
                  placeholder="e.g., $50/hr"
                  placeholderTextColor="#888"
                  keyboardType="numeric"
                  returnKeyType="done"
                  blurOnSubmit={false} // CRITICAL
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default React.memo(SkillsManagementScreen); // Memo the entire component
