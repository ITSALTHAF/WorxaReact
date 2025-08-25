import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius, SharedStyles } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    ...SharedStyles.container,
  },
  header: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xlarge,
    margin: Spacing.lg,
    padding: Spacing.xl,
    marginBottom: Spacing.xxl,
  },
  greetingText: {
    fontSize: FontSizes.title - 2,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: Spacing.xs,
  },
  subGreeting: {
    fontSize: FontSizes.regular,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xxl,
  },
  statCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    width: '48%',
    alignItems: 'center',
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statNumber: {
    fontSize: FontSizes.xlarge,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: Spacing.xs,
  },
  statLabel: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  quickActions: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xxl,
  },
  actionBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.large,
    alignItems: 'center',
    marginBottom: Spacing.md,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  actionBtnText: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.white,
  },
  logoutBtn: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  logoutBtnText: {
    color: '#ef4444',
  },
  activitySection: {
    paddingHorizontal: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },
  activityCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  activityText: {
    fontSize: FontSizes.regular,
    color: Colors.textTertiary,
    marginBottom: Spacing.xs,
  },
  activityTime: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
  },
});
