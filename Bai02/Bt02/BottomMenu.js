
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BottomMenu() {
  return (
    <View style={styles.menu}>
      <View style={styles.item}>
        <Text style={styles.icon}>🏠</Text>
        <Text style={styles.active}>Trang chủ</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.icon}>📚</Text>
        <Text style={styles.text}>Khóa học</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.icon}>📝</Text>
        <Text style={styles.text}>Bài tập</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.text}>Cá nhân</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: '#E7ECF3'
  },
  item: {
    alignItems: 'center',
    flex: 1
  },
  icon: {
    fontSize: 21
  },
  active: {
    fontSize: 11,
    color: '#246BCE',
    fontWeight: 'bold',
    marginTop: 4
  },
  text: {
    fontSize: 11,
    color: '#8290A5',
    marginTop: 4
  }
});
