
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseCard({ icon, title, teacher, progress, color }) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconBox, { backgroundColor: color }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.teacher}>{teacher}</Text>

        <View style={styles.progressInfo}>
          <Text style={styles.progressText}>Tiến độ học tập</Text>
          <Text style={styles.progressText}>{progress}%</Text>
        </View>

        <View style={styles.progressBackground}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 15,
    marginBottom: 12,
    elevation: 2
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  icon: {
    fontSize: 25
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#173B70'
  },
  teacher: {
    fontSize: 11,
    color: '#8290A5',
    marginTop: 5
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  progressText: {
    fontSize: 10,
    color: '#718096'
  },
  progressBackground: {
    height: 7,
    backgroundColor: '#E9EEF5',
    borderRadius: 10,
    marginTop: 6,
    overflow: 'hidden'
  },
  progressBar: {
    height: 7,
    backgroundColor: '#246BCE',
    borderRadius: 10
  }
});
