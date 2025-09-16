import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  quote: string;
  author: string;
};

export default function TestimonialCard({ quote, author }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.quote}>“{quote}”</Text>
      <Text style={styles.by}>— {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#f3f4f6', padding: 16, borderRadius: 8, marginBottom: 12 },
  quote: { fontSize: 16, color: '#111827' },
  by: { marginTop: 8, color: '#6b7280' },
});

