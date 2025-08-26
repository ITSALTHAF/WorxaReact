import React, { useState, useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  Image,
  Alert,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { launchImageLibrary, launchCamera, MediaType } from 'react-native-image-picker';
import { styles } from './PortfolioScreen.styles';

// Memoized PortfolioItem component
const PortfolioItem = React.memo(({ item, onEdit, onDelete, onPress }) => {
  const handleEdit = useCallback(() => {
    onEdit(item.id);
  }, [item.id, onEdit]);

  const handleDelete = useCallback(() => {
    onDelete(item.id);
  }, [item.id, onDelete]);

  const handlePress = useCallback(() => {
    onPress(item);
  }, [item, onPress]);

  return (
    <TouchableOpacity style={styles.portfolioItem} onPress={handlePress}>
      <Image source={{ uri: item.imageUrl }} style={styles.portfolioImage} />
      
      <View style={styles.portfolioOverlay}>
        <View style={styles.portfolioActions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
            <Text style={styles.actionIcon}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleDelete}>
            <Text style={styles.actionIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.portfolioInfo}>
        <Text style={styles.portfolioTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.portfolioCategory}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
});

const PortfolioScreen = ({ navigation }) => {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: 'Kitchen Sink Installation',
      description: 'Complete kitchen sink replacement with new fixtures',
      category: 'Plumbing',
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      createdAt: '2024-01-15',
    },
    {
      id: 2,
      title: 'Bathroom Tile Renovation',
      description: 'Full bathroom tile replacement with modern design',
      category: 'Tiling',
      imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400',
      createdAt: '2024-01-10',
    },
    {
      id: 3,
      title: 'Electrical Panel Upgrade',
      description: 'Upgraded electrical panel to modern standards',
      category: 'Electrical',
      imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400',
      createdAt: '2024-01-05',
    },
    {
      id: 4,
      title: 'Deck Construction',
      description: 'Built custom outdoor deck with premium materials',
      category: 'Carpentry',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      createdAt: '2023-12-28',
    },
    {
      id: 5,
      title: 'Interior Painting',
      description: 'Complete interior paint job for living room and bedrooms',
      category: 'Painting',
      imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400',
      createdAt: '2023-12-20',
    },
    {
      id: 6,
      title: 'Fence Installation',
      description: 'Installed privacy fence around backyard perimeter',
      category: 'Landscaping',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      createdAt: '2023-12-15',
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editingItem, setEditingItem] = useState(null);

  const [newPortfolioData, setNewPortfolioData] = useState({
    title: '',
    description: '',
    category: 'Plumbing',
    imageUrl: '',
  });

  const categories = useMemo(() => [
    'Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Tiling', 
    'HVAC', 'Landscaping', 'Roofing', 'Flooring', 'General'
  ], []);

  // Handle portfolio actions
  const handleAddPortfolio = useCallback(() => {
    setEditingItem(null);
    setNewPortfolioData({
      title: '',
      description: '',
      category: 'Plumbing',
      imageUrl: '',
    });
    setShowAddModal(true);
  }, []);

  const handleEditPortfolio = useCallback((itemId) => {
    const item = portfolioItems.find(p => p.id === itemId);
    if (item) {
      setEditingItem(item);
      setNewPortfolioData({
        title: item.title,
        description: item.description,
        category: item.category,
        imageUrl: item.imageUrl,
      });
      setShowAddModal(true);
    }
  }, [portfolioItems]);

  const handleDeletePortfolio = useCallback((itemId) => {
    Alert.alert(
      'Delete Portfolio Item',
      'Are you sure you want to delete this portfolio item?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setPortfolioItems(prev => prev.filter(item => item.id !== itemId));
          }
        }
      ]
    );
  }, []);

  const handleViewPortfolio = useCallback((item) => {
    setSelectedItem(item);
    setShowViewModal(true);
  }, []);

  const handleImageSelection = useCallback(() => {
    Alert.alert(
      'Select Image',
      'Choose an option',
      [
        { text: 'Camera', onPress: openCamera },
        { text: 'Gallery', onPress: openGallery },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  }, []);

  const openCamera = useCallback(() => {
    const options = {
      mediaType: 'photo',
      quality: 0.8,
      maxWidth: 1000,
      maxHeight: 1000,
    };

    launchCamera(options, (response) => {
      if (response.assets && response.assets[0]) {
        setNewPortfolioData(prev => ({
          ...prev,
          imageUrl: response.assets[0].uri || '',
        }));
      }
    });
  }, []);

  const openGallery = useCallback(() => {
    const options = {
      mediaType: 'photo',
      quality: 0.8,
      maxWidth: 1000,
      maxHeight: 1000,
    };

    launchImageLibrary(options, (response) => {
      if (response.assets && response.assets[0]) {
        setNewPortfolioData(prev => ({
          ...prev,
          imageUrl: response.assets[0].uri || '',
        }));
      }
    });
  }, []);

  const handleSavePortfolio = useCallback(() => {
    if (!newPortfolioData.title.trim() || !newPortfolioData.description.trim()) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (!newPortfolioData.imageUrl) {
      Alert.alert('Error', 'Please select an image');
      return;
    }

    if (editingItem) {
      // Update existing item
      setPortfolioItems(prev =>
        prev.map(item =>
          item.id === editingItem.id
            ? { ...item, ...newPortfolioData }
            : item
        )
      );
    } else {
      // Add new item
      const newItem = {
        id: Date.now(),
        ...newPortfolioData,
        createdAt: new Date().toISOString().split('T')[0],
      };
      setPortfolioItems(prev => [newItem, ...prev]);
    }

    setShowAddModal(false);
    setEditingItem(null);
  }, [newPortfolioData, editingItem]);

  const handleInputChange = useCallback((field) => (value) => {
    setNewPortfolioData(prev => ({ ...prev, [field]: value }));
  }, []);

  const toggleAddModal = useCallback(() => {
    setShowAddModal(prev => !prev);
  }, []);

  const toggleViewModal = useCallback(() => {
    setShowViewModal(prev => !prev);
  }, []);

  // Memoized components
  const Header = useMemo(() => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Portfolio</Text>
      <TouchableOpacity onPress={handleAddPortfolio}>
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>
    </View>
  ), [navigation, handleAddPortfolio]);

  const EmptyState = useMemo(() => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>📸</Text>
      <Text style={styles.emptyTitle}>No Portfolio Items</Text>
      <Text style={styles.emptySubtitle}>
        Add photos of your work to showcase your skills to potential clients
      </Text>
      <TouchableOpacity style={styles.emptyButton} onPress={handleAddPortfolio}>
        <Text style={styles.emptyButtonText}>Add First Item</Text>
      </TouchableOpacity>
    </View>
  ), [handleAddPortfolio]);

  return (
    <SafeAreaView style={styles.container}>
      {Header}

      {portfolioItems.length === 0 ? EmptyState : (
        <ScrollView 
          style={styles.content} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.portfolioGrid}>
            {portfolioItems.map((item) => (
              <PortfolioItem
                key={`portfolio-${item.id}`}
                item={item}
                onEdit={handleEditPortfolio}
                onDelete={handleDeletePortfolio}
                onPress={handleViewPortfolio}
              />
            ))}
          </View>

          <View style={styles.helpSection}>
            <Text style={styles.helpTitle}>📷 Portfolio Tips</Text>
            <Text style={styles.helpText}>
              • Take high-quality before and after photos
            </Text>
            <Text style={styles.helpText}>
              • Include multiple angles of your work
            </Text>
            <Text style={styles.helpText}>
              • Write descriptive titles and details
            </Text>
            <Text style={styles.helpText}>
              • Organize by categories for easy browsing
            </Text>
          </View>
        </ScrollView>
      )}

      {/* Add/Edit Portfolio Modal */}
      <Modal
        visible={showAddModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={toggleAddModal}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={toggleAddModal}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>
              {editingItem ? 'Edit Portfolio' : 'Add Portfolio'}
            </Text>
            <TouchableOpacity onPress={handleSavePortfolio}>
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
              {/* Image Upload Section */}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Photo *</Text>
                <TouchableOpacity 
                  style={styles.imageUploadContainer}
                  onPress={handleImageSelection}
                >
                  {newPortfolioData.imageUrl ? (
                    <Image 
                      source={{ uri: newPortfolioData.imageUrl }} 
                      style={styles.uploadedImage} 
                    />
                  ) : (
                    <View style={styles.imagePlaceholder}>
                      <Text style={styles.imagePlaceholderIcon}>📷</Text>
                      <Text style={styles.imagePlaceholderText}>Tap to add photo</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Title *</Text>
                <TextInput
                  style={styles.input}
                  value={newPortfolioData.title}
                  onChangeText={handleInputChange('title')}
                  placeholder="e.g., Kitchen Renovation"
                  placeholderTextColor="#888"
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>

              <View style={styles.categoryContainer}>
  <Text style={styles.label}>Category</Text>
  <View style={styles.categoryTagsContainer}>
    {categories.map((category, index) => (
      <TouchableOpacity
        key={`category-${category}`}
        style={[
          styles.categoryTag,
          newPortfolioData.category === category && styles.categoryTagSelected,
        ]}
        onPress={() => handleInputChange('category')(category)}
      >
        <Text style={[
          styles.categoryTagText,
          newPortfolioData.category === category && styles.categoryTagTextSelected
        ]}>
          {category}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
</View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Description *</Text>
                <TextInput
                  style={styles.textArea}
                  value={newPortfolioData.description}
                  onChangeText={handleInputChange('description')}
                  placeholder="Describe the work performed, materials used, challenges overcome..."
                  placeholderTextColor="#888"
                  multiline
                  numberOfLines={4}
                  returnKeyType="done"
                  blurOnSubmit={false}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>

      {/* View Portfolio Modal */}
      <Modal
        visible={showViewModal}
        animationType="fade"
        presentationStyle="pageSheet"
        onRequestClose={toggleViewModal}
      >
        <SafeAreaView style={styles.viewModalContainer}>
          <View style={styles.viewModalHeader}>
            <TouchableOpacity onPress={toggleViewModal}>
              <Text style={styles.viewModalClose}>×</Text>
            </TouchableOpacity>
          </View>

          {selectedItem && (
            <ScrollView style={styles.viewModalContent}>
              <Image 
                source={{ uri: selectedItem.imageUrl }} 
                style={styles.viewModalImage} 
                resizeMode="contain"
              />
              
              <View style={styles.viewModalInfo}>
                <Text style={styles.viewModalTitle}>{selectedItem.title}</Text>
                <Text style={styles.viewModalCategory}>{selectedItem.category}</Text>
                <Text style={styles.viewModalDescription}>{selectedItem.description}</Text>
                <Text style={styles.viewModalDate}>
                  Added on {new Date(selectedItem.createdAt).toLocaleDateString()}
                </Text>
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default React.memo(PortfolioScreen);
