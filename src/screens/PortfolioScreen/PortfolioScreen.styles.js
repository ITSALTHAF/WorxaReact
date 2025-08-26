import { StyleSheet, Dimensions } from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../styles/SharedStyles';

const { width } = Dimensions.get('window');
const itemWidth = (width - Spacing.xl * 3) / 2;

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

    // Portfolio Grid
    portfolioGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: Spacing.xl,
    },
    portfolioItem: {
        width: itemWidth,
        marginBottom: Spacing.lg,
        backgroundColor: Colors.cardBackground,
        borderRadius: BorderRadius.large,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    portfolioImage: {
        width: '100%',
        height: itemWidth * 0.8,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    portfolioOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: Spacing.sm,
    },
    portfolioActions: {
        flexDirection: 'row',
        gap: Spacing.xs,
    },
    actionButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionIcon: {
        fontSize: 12,
    },
    portfolioInfo: {
        padding: Spacing.md,
    },
    portfolioTitle: {
        fontSize: FontSizes.small,
        fontWeight: '600',
        color: Colors.textPrimary,
        marginBottom: Spacing.xs,
        lineHeight: 18,
    },
    portfolioCategory: {
        fontSize: FontSizes.tiny,
        color: Colors.primary,
        fontWeight: '500',
    },

    // Empty State
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Spacing.xl,
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: Spacing.lg,
    },
    emptyTitle: {
        fontSize: FontSizes.xlarge,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginBottom: Spacing.sm,
        textAlign: 'center',
    },
    emptySubtitle: {
        fontSize: FontSizes.regular,
        color: Colors.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: Spacing.xl,
    },
    emptyButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: Spacing.xl,
        paddingVertical: Spacing.md,
        borderRadius: BorderRadius.large,
    },
    emptyButtonText: {
        fontSize: FontSizes.regular,
        fontWeight: '600',
        color: Colors.white,
    },

    // Help Section
    helpSection: {
        backgroundColor: Colors.cardBackground,
        borderRadius: BorderRadius.large,
        padding: Spacing.lg,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: Spacing.xl,
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

    // Modal Styles
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
        height: 48,
    },
    textArea: {
        backgroundColor: Colors.cardBackground,
        borderRadius: BorderRadius.large,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        fontSize: FontSizes.regular,
        color: Colors.textPrimary,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        minHeight: 100,
        textAlignVertical: 'top',
    },

    // Image Upload
    imageUploadContainer: {
        width: '100%',
        height: 200,
        borderRadius: BorderRadius.large,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    uploadedImage: {
        width: '100%',
        height: '100%',
    },
    imagePlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholderIcon: {
        fontSize: 32,
        marginBottom: Spacing.sm,
    },
    imagePlaceholderText: {
        fontSize: FontSizes.regular,
        color: Colors.textSecondary,
    },

    // Category Selector
    categoryContainer: {
        marginBottom: Spacing.lg,
    },

    categoryTagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // THIS IS KEY - allows wrapping to next line
        gap: Spacing.sm,
        marginTop: Spacing.sm,
    },

    categoryTag: {
        backgroundColor: Colors.cardBackground,
        borderRadius: BorderRadius.medium,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        minHeight: 36,
        justifyContent: 'center',
        // Remove marginRight - using gap instead
    },

    categoryTagSelected: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },

    categoryTagText: {
        fontSize: FontSizes.small,
        color: Colors.textSecondary,
        fontWeight: '500',
        textAlign: 'center',
    },

    categoryTagTextSelected: {
        color: Colors.white,
        fontWeight: '600',
    },

    // View Modal
    viewModalContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    viewModalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: Spacing.xl,
        paddingVertical: Spacing.lg,
    },
    viewModalClose: {
        fontSize: 32,
        color: Colors.textSecondary,
        fontWeight: '300',
    },
    viewModalContent: {
        flex: 1,
    },
    viewModalImage: {
        width: '100%',
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    viewModalInfo: {
        padding: Spacing.xl,
    },
    viewModalTitle: {
        fontSize: FontSizes.xlarge,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginBottom: Spacing.sm,
    },
    viewModalCategory: {
        fontSize: FontSizes.regular,
        color: Colors.primary,
        fontWeight: '600',
        marginBottom: Spacing.lg,
    },
    viewModalDescription: {
        fontSize: FontSizes.regular,
        color: Colors.textPrimary,
        lineHeight: 24,
        marginBottom: Spacing.lg,
    },
    viewModalDate: {
        fontSize: FontSizes.small,
        color: Colors.textSecondary,
    },
});
