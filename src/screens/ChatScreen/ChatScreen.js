import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './ChatScreen.styles';

const ChatScreen = ({ navigation, route }) => {
  const { conversationId, userName, userAvatar, jobTitle } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I saw your application for the kitchen sink job. Can you start today?",
      sender: 'them',
      time: '2:30 PM',
      timestamp: Date.now() - 120000
    },
    {
      id: 2,
      text: "Yes, I'm available this afternoon. What time works best for you?",
      sender: 'me',
      time: '2:32 PM',
      timestamp: Date.now() - 60000
    },
    {
      id: 3,
      text: "Great! How about 2:00 PM? I'll send you the exact address.",
      sender: 'them',
      time: '2:33 PM',
      timestamp: Date.now() - 30000
    },
    {
      id: 4,
      text: "Perfect! I'll be there at 2 PM. Should I bring any specific tools?",
      sender: 'me',
      time: '2:35 PM',
      timestamp: Date.now() - 15000
    },
    {
      id: 5,
      text: "Just your basic plumbing tools. Looking forward to meeting you! 👍",
      sender: 'them',
      time: '2:36 PM',
      timestamp: Date.now()
    }
  ]);
  
  const scrollViewRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Scroll to bottom when messages change
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message.trim(),
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      // Simulate typing indicator and response
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        // Simulate a response (in real app, this would come from WebSocket)
        if (Math.random() > 0.5) {
          const responses = [
            "Thanks for the quick response!",
            "Sounds good to me 👍",
            "I'll get back to you shortly.",
            "Perfect, see you then!"
          ];
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          
          const responseMessage = {
            id: messages.length + 2,
            text: randomResponse,
            sender: 'them',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            timestamp: Date.now()
          };
          
          setMessages(prev => [...prev, responseMessage]);
        }
      }, 2000);
    }
  };

  const renderMessage = (msg) => (
    <View key={msg.id} style={[
      styles.messageContainer,
      msg.sender === 'me' ? styles.myMessage : styles.theirMessage
    ]}>
      <View style={[
        styles.messageBubble,
        msg.sender === 'me' ? styles.myMessageBubble : styles.theirMessageBubble
      ]}>
        <Text style={[
          styles.messageText,
          msg.sender === 'me' ? styles.myMessageText : styles.theirMessageText
        ]}>
          {msg.text}
        </Text>
      </View>
      <Text style={styles.messageTime}>{msg.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Chat Header */}
        <View style={styles.chatHeader}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          
          <View style={styles.headerInfo}>
            <View style={styles.headerAvatar}>
              <Text style={styles.headerAvatarText}>{userAvatar}</Text>
            </View>
            <View style={styles.headerText}>
              <Text style={styles.headerName}>{userName}</Text>
              <Text style={styles.headerStatus}>Online now</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>⋯</Text>
          </TouchableOpacity>
        </View>

        {/* Job Context */}
        <View style={styles.jobContext}>
          <Text style={styles.jobContextText}>💼 {jobTitle}</Text>
        </View>

        {/* Messages */}
        <ScrollView 
          ref={scrollViewRef}
          style={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map(renderMessage)}
          
          {isTyping && (
            <View style={styles.typingContainer}>
              <View style={styles.typingBubble}>
                <Text style={styles.typingText}>...</Text>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Message Input */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.messageInput}
              placeholder="Type a message..."
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={message}
              onChangeText={setMessage}
              multiline
              maxLength={500}
            />
            <TouchableOpacity 
              style={[styles.sendButton, message.trim() ? styles.sendButtonActive : null]}
              onPress={handleSendMessage}
              disabled={!message.trim()}
            >
              <Text style={styles.sendButtonText}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
