import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 16,
  },
  statusTabs: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tabButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 8,
  },
  tabButtonSelected: {
    backgroundColor: '#667eea',
  },
  tabButtonText: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '600',
  },
  tabButtonTextSelected: {
    color: '#fff',
  },
  bookingCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  userName: {
    fontSize: 14,
    color: '#667eea',
    marginBottom: 8,
  },
  dateTime: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 8,
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fbbf24', // default to yellow for pending
  },
  statusConfirmed: {
    color: '#22c55e', // green for confirmed
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});
