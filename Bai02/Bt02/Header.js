
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Xin chào, chào buổi sáng!</Text>
        <Text style={styles.name}>Nguyễn Thành Danh 👋</Text>
        <Text style={styles.info}>Sinh viên · LearningApp</Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>D</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25
  },
  greeting: {
    fontSize: 14,
    color: '#718096'
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#173B70',
    marginTop: 6
  },
  info: {
    fontSize: 12,
    color: '#718096',
    marginTop: 5
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#246BCE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  }
});
