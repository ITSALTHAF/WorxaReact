import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius, SharedStyles } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    ...SharedStyles.container,
    background: `linear-gradient(135deg, ${Colors.background} 0%, ${Colors.cardBackground} 100%)`,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xxl * 2,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    fontSize: FontSizes.title + 8,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },
  welcomeText: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    ...SharedStyles.inputContainer,
    marginVertical: Spacing.md,
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
  forgotButton: {
    alignSelf: 'flex-end',
    marginVertical: Spacing.sm,
  },
  forgotText: {
    fontSize: FontSizes.medium,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  loginButton: {
    ...SharedStyles.buttonPrimary,
    marginTop: Spacing.xl,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    ...SharedStyles.buttonPrimaryText,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
  },
  signUpText: {
    fontSize: FontSizes.regular,
    color: Colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
