import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get in touch</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Your name" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail} placeholder="you@example.com" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Message</Text>
        <TextInput style={[styles.input, styles.multiline]} value={message} onChangeText={setMessage} placeholder="How can I help?" multiline />
      </View>
      <Pressable style={styles.primaryCta} onPress={() => Alert.alert('Thanks!', 'I will get back to you soon.') }>
        <Text style={styles.primaryCtaText}>Send</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  field: { marginBottom: 12 },
  label: { marginBottom: 6, color: '#374151' },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  multiline: { minHeight: 100, textAlignVertical: 'top' },
  primaryCta: { backgroundColor: '#2563eb', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  primaryCtaText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});

