import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.body}>
        I'm a certified coach specializing in running, strength training, mindfulness, and nutrition. I help
        athletes and busy professionals build sustainable habits and hit performance goals.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  body: { fontSize: 16, color: '#333' },
});

