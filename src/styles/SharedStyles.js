import { StyleSheet } from 'react-native';

// Colors extracted from your design
export const Colors = {
  primary: '#667eea',
  primaryDark: '#764ba2', 
  background: '#0a0a0a',
  cardBackground: '#1a1a1a',
  cardBackgroundLight: '#2a2a2a',
  white: '#ffffff',
  textPrimary: '#ffffff',
  textSecondary: '#888888',
  textTertiary: '#cccccc',
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
};

export const FontSizes = {
  small: 12,
  medium: 14,
  regular: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 24,
  title: 28,
  heading: 32,
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const BorderRadius = {
  small: 6,
  medium: 8,
  large: 12,
  xlarge: 15,
  xxlarge: 20,
  round: 50,
};

export const SharedStyles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xxl,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginVertical: Spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },

  // Typography
  title: {
    fontSize: FontSizes.heading,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  bodyText: {
    fontSize: FontSizes.regular,
    color: Colors.textTertiary,
    lineHeight: 22,
  },

  // Buttons
  buttonPrimary: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.large,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xxxl,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonPrimaryText: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: Colors.white,
  },
  buttonSecondary: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 2,
    borderRadius: BorderRadius.large,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xxxl,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.white,
  },

  // Input Fields (for future screens)
  inputContainer: {
    marginVertical: Spacing.sm,
  },
  inputLabel: {
    fontSize: FontSizes.medium,
    color: Colors.textTertiary,
    marginBottom: Spacing.sm,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: BorderRadius.large,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    fontSize: FontSizes.regular,
    color: Colors.white,
  },

  // Logo
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  logoText: {
    fontSize: FontSizes.xxlarge,
    fontWeight: '800',
    color: Colors.white,
  },
});
