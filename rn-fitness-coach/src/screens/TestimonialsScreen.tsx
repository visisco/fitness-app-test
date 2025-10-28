import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import TestimonialCard from '@components/TestimonialCard';

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
        <TestimonialCard key={t.name} quote={t.text} author={t.name} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  // card styles moved to component
});

