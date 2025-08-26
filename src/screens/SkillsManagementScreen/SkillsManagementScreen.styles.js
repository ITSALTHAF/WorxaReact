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
    height: 60, // Fixed height to prevent layout shifts
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
  skillsGrid: {
    marginBottom: Spacing.xl,
  },
  skillCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    minHeight: 70, // Fixed minimum height
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillInfo: {
    flex: 1,
  },
  skillName: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  skillLevel: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
  },
  removeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIcon: {
    fontSize: 18,
    color: '#ef4444',
    fontWeight: '300',
  },

  // Modal Styles - Fixed layouts
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalKeyboardContainer: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    height: 60, // Fixed height
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
  saveButton: {
    fontSize: FontSizes.regular,
    color: Colors.primary,
    fontWeight: '600',
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
  },
  formGroup: {
    marginBottom: Spacing.xl,
  },
  label: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  input: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    fontSize: FontSizes.regular,
    color: Colors.textPrimary,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    minHeight: 48, // Fixed height
  },
  suggestedSkills: {
    marginBottom: Spacing.xl,
  },
  suggestedTitle: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  skillTag: {
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    borderRadius: BorderRadius.large,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.3)',
    minHeight: 32, // Fixed height to prevent jumping
  },
  skillTagText: {
    fontSize: FontSizes.small,
    color: Colors.primary,
    fontWeight: '500',
  },
  levelSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  levelOption: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.medium,
    paddingVertical: Spacing.md,
    marginHorizontal: Spacing.xs,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    minHeight: 44, // Fixed height
  },
  levelOptionSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  levelText: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
  },
  levelTextSelected: {
    color: Colors.white,
    fontWeight: '600',
  },
  helpSection: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  helpTitle: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  helpText: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Spacing.xs,
  },
  keyboardContainer: {
    flex: 1,
  },
  modalKeyboardContainer: {
    flex: 1,
  },
});
