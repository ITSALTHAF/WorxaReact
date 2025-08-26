import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../styles/SharedStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  keyboardAvoid: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  cancelButton: {
    fontSize: FontSizes.regular,
    color: Colors.textSecondary,
  },
  headerTitle: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  saveButton: {
    fontSize: FontSizes.regular,
    color: Colors.primary,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
  form: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
  },
  section: {
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },
  formGroup: {
    marginBottom: Spacing.lg,
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
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    fontSize: FontSizes.small,
    color: '#ef4444',
    marginTop: Spacing.xs,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  halfInput: {
    width: '48%',
  },
  quarterInput: {
    width: '22%',
  },
});
