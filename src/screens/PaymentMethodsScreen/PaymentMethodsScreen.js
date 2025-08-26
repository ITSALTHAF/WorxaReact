import React, { useState, useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  Modal
} from 'react-native';
import { styles } from './PaymentMethodsScreen.styles';

const PaymentMethodCard = React.memo(({ method, onRemove, onSetDefault }) => {
  const handleRemove = useCallback(() => {
    onRemove(method.id);
  }, [method.id, onRemove]);

  const handleSetDefault = useCallback(() => {
    onSetDefault(method.id);
  }, [method.id, onSetDefault]);

  return (
    <View style={styles.paymentCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTypeIcon}>
          <Text style={styles.cardTypeText}>
            {method.type === 'card' ? '💳' : method.type === 'paypal' ? '🅿️' : '🏦'}
          </Text>
        </View>
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{method.name}</Text>
          <Text style={styles.cardDetails}>{method.details}</Text>
        </View>

        {method.isDefault && (
          <View style={styles.defaultBadge}>
            <Text style={styles.defaultText}>Default</Text>
          </View>
        )}
      </View>

      <View style={styles.cardActions}>
        {!method.isDefault && (
          <TouchableOpacity style={styles.actionButton} onPress={handleSetDefault}>
            <Text style={styles.actionButtonText}>Set Default</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const PaymentMethodsScreen = ({ navigation }) => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'card',
      name: 'Visa •••• 4567',
      details: 'Expires 12/26',
      isDefault: true
    },
    {
      id: 2,
      type: 'paypal',
      name: 'PayPal',
      details: 'alex.johnson@email.com',
      isDefault: false
    },
    {
      id: 3,
      type: 'bank',
      name: 'Bank Transfer',
      details: 'Chase •••• 8901',
      isDefault: false
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  const handleRemoveMethod = useCallback((methodId) => {
    Alert.alert(
      'Remove Payment Method',
      'Are you sure you want to remove this payment method?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setPaymentMethods(prev => prev.filter(method => method.id !== methodId));
          }
        }
      ]
    );
  }, []);

  const handleSetDefault = useCallback((methodId) => {
    setPaymentMethods(prev => 
      prev.map(method => ({
        ...method,
        isDefault: method.id === methodId
      }))
    );
  }, []);

  const toggleAddModal = useCallback(() => {
    setShowAddModal(prev => !prev);
  }, []);

  const Header = useMemo(() => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Payment Methods</Text>
      <TouchableOpacity onPress={toggleAddModal}>
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>
    </View>
  ), [navigation, toggleAddModal]);

  return (
    <SafeAreaView style={styles.container}>
      {Header}

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.sectionTitle}>Your Payment Methods</Text>
        
        <View style={styles.paymentMethodsList}>
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={`payment-${method.id}`}
              method={method}
              onRemove={handleRemoveMethod}
              onSetDefault={handleSetDefault}
            />
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>💡 Payment Information</Text>
          <Text style={styles.infoText}>
            • Your payment methods are encrypted and secure
          </Text>
          <Text style={styles.infoText}>
            • You can add multiple payment methods for convenience
          </Text>
          <Text style={styles.infoText}>
            • Set a default method for faster checkout
          </Text>
        </View>
      </ScrollView>

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
            <Text style={styles.modalTitle}>Add Payment Method</Text>
            <View style={styles.placeholder} />
          </View>

          <View style={styles.modalContent}>
            <Text style={styles.comingSoonText}>Coming Soon</Text>
            <Text style={styles.comingSoonSubtext}>
              Payment method integration will be available in the next update
            </Text>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default React.memo(PaymentMethodsScreen);
