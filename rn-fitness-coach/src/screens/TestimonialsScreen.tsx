import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const TESTIMONIALS = [
  { name: 'Alex', text: 'Improved my 5K time by 2 minutes in 8 weeks!' },
  { name: 'Sam', text: 'Stronger and more confident in the gym.' },
  { name: 'Riley', text: 'Mindfulness coaching helped my focus and sleep.' },
];

export default function TestimonialsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Testimonials</Text>
      {TESTIMONIALS.map((t) => (
        <View key={t.name} style={styles.card}>
          <Text style={styles.quote}>“{t.text}”</Text>
          <Text style={styles.by}>— {t.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  card: { backgroundColor: '#f3f4f6', padding: 16, borderRadius: 8, marginBottom: 12 },
  quote: { fontSize: 16, color: '#111827' },
  by: { marginTop: 8, color: '#6b7280' },
});

