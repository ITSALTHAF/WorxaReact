import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: Spacing.xxxl,
  },

  // Header Section - FIXED for notification positioning
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,    // Keep normal padding
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xxl,
    paddingRight: Spacing.xxl,        // REDUCED right padding
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  avatarText: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    color: Colors.white,
  },
  greetingContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  userName: {
    fontSize: FontSizes.xlarge,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,    // Add margin from right edge
    // Remove marginLeft to prevent pushing right
  },
  notificationIcon: {
    fontSize: 18,
  },

  // Stats Overview (unchanged)
  statsOverview: {
    marginHorizontal: Spacing.xl,
    marginBottom: Spacing.xxxl,
  },
  primaryStat: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xxlarge,
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  primaryStatValue: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: Spacing.xs,
  },
  primaryStatLabel: {
    fontSize: FontSizes.regular,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  secondaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryStat: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: Spacing.xs,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  secondaryStatValue: {
    fontSize: FontSizes.xlarge,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: Spacing.xs,
  },
  secondaryStatLabel: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    textAlign: 'center',
  },

  // Quick Actions (unchanged)
  quickActionsSection: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.xxxl,
  },
  sectionTitle: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  actionIconText: {
    fontSize: 24,
  },
  actionLabel: {
    fontSize: FontSizes.medium,
    fontWeight: '600',
    color: Colors.textPrimary,
    textAlign: 'center',
  },

  // Activity Section (unchanged)
  activitySection: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.xxxl,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  seeAllText: {
    fontSize: FontSizes.medium,
    color: Colors.primary,
    fontWeight: '600',
  },
  activityList: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  activityIcon: {
    fontSize: 18,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: FontSizes.regular,
    color: Colors.textPrimary,
    fontWeight: '500',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
  },
  activityStatus: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
});
