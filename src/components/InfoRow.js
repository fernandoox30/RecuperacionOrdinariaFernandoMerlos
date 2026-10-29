import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#1B1B23',
    borderWidth: 1,
    borderColor: '#2B2B36',
    borderRadius: 14,
    padding: 15,
    marginBottom: 10
  },
  label: {
    color: '#A83DDB',
    fontWeight: '800',
    fontSize: 13,
    marginBottom: 5
  },
  value: {
    color: '#FFFFFF',
    fontSize: 16
  }
});