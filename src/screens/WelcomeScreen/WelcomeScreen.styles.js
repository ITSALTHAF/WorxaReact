import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius, SharedStyles } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    ...SharedStyles.container,
    background: `linear-gradient(135deg, ${Colors.primary} 0%, ${Colors.primaryDark} 100%)`,
    backgroundColor: Colors.primary, // Fallback for React Native
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xxl * 2,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 60,
  },
  logoContainer: {
    ...SharedStyles.logoContainer,
  },
  logoText: {
    ...SharedStyles.logoText,
  },
  tagline: {
    fontSize: FontSizes.regular,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },
  valueSection: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  valueTitle: {
    fontSize: FontSizes.title,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  valueSubtitle: {
    fontSize: FontSizes.regular,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 24,
  },
  ctaSection: {
    width: '100%',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.white,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xxxl,
    borderRadius: BorderRadius.large,
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xxxl,
    borderRadius: BorderRadius.large,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  secondaryButtonText: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.white,
  },
  skipButton: {
    paddingVertical: Spacing.sm,
  },
  skipText: {
    fontSize: FontSizes.medium,
    color: 'rgba(255, 255, 255, 0.7)',
    textDecorationLine: 'underline',
  },
});
