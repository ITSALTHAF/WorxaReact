import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius, SharedStyles } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    ...SharedStyles.container,
  },
  keyboardContainer: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  backButtonText: {
    fontSize: FontSizes.xlarge,
    color: Colors.primary,
    fontWeight: '600',
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  headerAvatarText: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.white,
  },
  headerText: {
    flex: 1,
  },
  headerName: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  headerStatus: {
    fontSize: FontSizes.small,
    color: Colors.success,
  },
  moreButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: FontSizes.large,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  jobContext: {
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  jobContextText: {
    fontSize: FontSizes.small,
    color: Colors.primary,
    textAlign: 'center',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  messageContainer: {
    marginBottom: Spacing.md,
  },
  myMessage: {
    alignItems: 'flex-end',
  },
  theirMessage: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xlarge,
    marginBottom: Spacing.xs,
  },
  myMessageBubble: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 6,
  },
  theirMessageBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomLeftRadius: 6,
  },
  messageText: {
    fontSize: FontSizes.regular,
    lineHeight: 20,
  },
  myMessageText: {
    color: Colors.white,
  },
  theirMessageText: {
    color: Colors.textTertiary,
  },
  messageTime: {
    fontSize: FontSizes.small - 1,
    color: Colors.textSecondary,
  },
  typingContainer: {
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  typingBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xlarge,
    borderBottomLeftRadius: 6,
  },
  typingText: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: BorderRadius.xlarge,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  messageInput: {
    flex: 1,
    fontSize: FontSizes.regular,
    color: Colors.white,
    maxHeight: 100,
    paddingVertical: Spacing.xs,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(102, 126, 234, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Spacing.sm,
  },
  sendButtonActive: {
    backgroundColor: Colors.primary,
  },
  sendButtonText: {
    fontSize: FontSizes.large,
    color: Colors.white,
    fontWeight: '600',
  },
});
