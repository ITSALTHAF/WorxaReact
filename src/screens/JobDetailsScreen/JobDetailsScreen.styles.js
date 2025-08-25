import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#667eea',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
    color: '#c1c1c1',
    marginBottom: 8,
  },
  budget: {
    fontSize: 18,
    fontWeight: '600',
    color: '#22c55e',
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: '#667eea',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
});
