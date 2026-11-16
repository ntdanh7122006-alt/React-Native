
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatCard({ number, title, icon, color }) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconBox, { backgroundColor: color }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <Text style={styles.number}>{number}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '31.5%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    elevation: 3
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9
  },
  icon: {
    fontSize: 20
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#246BCE'
  },
  title: {
    fontSize: 11,
    color: '#718096',
    marginTop: 5,
    textAlign: 'center'
  }
});
