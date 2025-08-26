import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    height: 60,
  },
  backButton: {
    fontSize: 24,
    color: Colors.primary,
  },
  headerTitle: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  addButton: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: '300',
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },
  paymentMethodsList: {
    marginBottom: Spacing.xl,
  },
  paymentCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  cardTypeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  cardTypeText: {
    fontSize: 18,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  cardDetails: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
  },
  defaultBadge: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    borderRadius: BorderRadius.medium,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  defaultText: {
    fontSize: FontSizes.small,
    color: '#22c55e',
    fontWeight: '600',
  },
  cardActions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  actionButton: {
    flex: 1,
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    borderRadius: BorderRadius.medium,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.3)',
  },
  actionButtonText: {
    fontSize: FontSizes.small,
    color: Colors.primary,
    fontWeight: '600',
  },
  removeButton: {
    flex: 1,
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderRadius: BorderRadius.medium,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  removeButtonText: {
    fontSize: FontSizes.small,
    color: '#ef4444',
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  infoTitle: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  infoText: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Spacing.xs,
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    height: 60,
  },
  modalTitle: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  cancelButton: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
  },
  placeholder: {
    width: 50,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  comingSoonText: {
    fontSize: FontSizes.xlarge,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  comingSoonSubtext: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
