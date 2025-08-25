import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius, SharedStyles } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    ...SharedStyles.container,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xxl * 2,
  },
  icon: {
    fontSize: 64,
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: FontSizes.title - 4,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  email: {
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  codeContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.xxl * 2,
  },
  codeInputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.xl,
  },
  codeInput: {
    width: 50,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: BorderRadius.medium,
    fontSize: FontSizes.xlarge,
    color: Colors.white,
    fontWeight: '600',
  },
  verifyButton: {
    ...SharedStyles.buttonPrimary,
    width: '100%',
  },
  verifyButtonDisabled: {
    opacity: 0.6,
  },
  verifyButtonText: {
    ...SharedStyles.buttonPrimaryText,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
  },
  resendLink: {
    fontSize: FontSizes.medium,
    color: Colors.primary,
    fontWeight: '600',
  },
  resendLinkDisabled: {
    color: Colors.textSecondary,
  },
});
