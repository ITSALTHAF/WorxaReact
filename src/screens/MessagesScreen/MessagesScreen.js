import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { styles } from './MessagesScreen.styles';

const MessagesScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [conversations] = useState([
    {
      id: 1,
      name: 'Maria Santos',
      avatar: 'MS',
      lastMessage: 'Can you start at 2 PM today?',
      time: '2 min',
      unread: 2,
      online: true,
      jobTitle: 'Kitchen Sink Repair'
    },
    {
      id: 2,
      name: 'Robert Chen',
      avatar: 'RC',
      lastMessage: 'Thanks for the quick response!',
      time: '1 hour',
      unread: 0,
      online: false,
      jobTitle: 'Ceiling Fan Install'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      lastMessage: 'Job completed successfully 👍',
      time: '2 days',
      unread: 0,
      online: true,
      jobTitle: 'Bathroom Tile Repair'
    }
  ]);

  const handleChatPress = (conversation) => {
    navigation.navigate('Chat', { 
      conversationId: conversation.id,
      userName: conversation.name,
      userAvatar: conversation.avatar,
      jobTitle: conversation.jobTitle 
    });
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>💬 Messages</Text>
        <TouchableOpacity style={styles.newChatButton}>
          <Text style={styles.newChatText}>✉️</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search conversations..."
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredConversations.map((conversation) => (
          <TouchableOpacity
            key={conversation.id}
            style={styles.conversationItem}
            onPress={() => handleChatPress(conversation)}
            activeOpacity={0.8}
          >
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{conversation.avatar}</Text>
              </View>
              {conversation.online && <View style={styles.onlineIndicator} />}
            </View>

            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.userName}>{conversation.name}</Text>
                <Text style={styles.messageTime}>{conversation.time}</Text>
              </View>
              <Text style={styles.jobTitle}>{conversation.jobTitle}</Text>
              <Text style={styles.lastMessage}>{conversation.lastMessage}</Text>
            </View>

            {conversation.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadCount}>{conversation.unread}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        {filteredConversations.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No conversations found</Text>
            <Text style={styles.emptySubtext}>Start a new conversation from job applications</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessagesScreen;
