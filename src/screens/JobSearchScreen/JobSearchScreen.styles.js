import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#667eea',
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  categoryBtn: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryBtnSelected: {
    backgroundColor: '#667eea',
  },
  categoryText: {
    color: '#ccc',
    fontSize: 14,
  },
  categoryTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
  jobCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  jobTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  jobCategory: {
    color: '#667eea',
    fontSize: 14,
    marginBottom: 8,
  },
  jobInfo: {
    color: '#ccc',
    fontSize: 12,
  },
});
