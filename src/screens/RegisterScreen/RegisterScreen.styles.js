import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius, SharedStyles } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    ...SharedStyles.container,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  logo: {
    fontSize: FontSizes.title - 4,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
  },

  // Role Selection
  roleSection: {
    marginBottom: Spacing.xxl,
  },
  sectionTitle: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  roleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
  roleButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    alignItems: 'center',
    minHeight: 140,
    justifyContent: 'center',
  },
  roleButtonSelected: {
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    borderColor: Colors.primary,
  },
  roleIcon: {
    fontSize: 32,
    marginBottom: Spacing.sm,
  },
  roleTitle: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.textTertiary,
    marginBottom: Spacing.xs,
  },
  roleDescription: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
  roleTextSelected: {
    color: Colors.primary,
  },

  // Form
  formContainer: {
    marginBottom: Spacing.xl,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
  nameInputContainer: {
    flex: 1,
    marginVertical: Spacing.sm,
  },
  inputContainer: {
    ...SharedStyles.inputContainer,
  },
  inputLabel: {
    ...SharedStyles.inputLabel,
  },
  input: {
    ...SharedStyles.input,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: BorderRadius.large,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    fontSize: FontSizes.regular,
    color: Colors.white,
  },
  eyeButton: {
    paddingHorizontal: Spacing.lg,
  },
  eyeText: {
    fontSize: FontSizes.large,
  },

  // Checkbox
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: Spacing.lg,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: BorderRadius.small,
    marginRight: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  checkmark: {
    color: Colors.white,
    fontSize: FontSizes.small,
    fontWeight: 'bold',
  },
  termsTextContainer: {
    flex: 1,
  },
  termsText: {
    fontSize: FontSizes.medium,
    color: Colors.textTertiary,
    lineHeight: 20,
  },
  termsLink: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },

  // Buttons
  registerButton: {
    ...SharedStyles.buttonPrimary,
    marginTop: Spacing.lg,
  },
  registerButtonDisabled: {
    opacity: 0.6,
  },
  registerButtonText: {
    ...SharedStyles.buttonPrimaryText,
  },

  // Footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  footerText: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
  },
  loginText: {
    fontSize: FontSizes.regular,
    color: Colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
