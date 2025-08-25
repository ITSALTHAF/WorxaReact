import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 16,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  title: {
    color: '#667eea',
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 6,
  },
  status: {
    color: '#22c55e',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  label: {
    color: '#aaa',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 10,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  actionBtn: {
    backgroundColor: '#ef4444',
    marginTop: 30,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
