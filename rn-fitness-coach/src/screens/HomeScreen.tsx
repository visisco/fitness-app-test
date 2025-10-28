import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headline}>Personal Fitness Coaching</Text>
      <Text style={styles.subhead}>Running Training • Weightlifting • Mindfulness • Dieting</Text>

      <Pressable style={styles.primaryCta} onPress={() => navigation.navigate('Book' as never)}>
        <Text style={styles.primaryCtaText}>Book a Session</Text>
      </Pressable>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services</Text>
        <Text style={styles.body}>• Running Training{"\n"}• Weightlifting{"\n"}• Mindfulness{"\n"}• Dieting</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.body}>Certified coach helping clients improve performance and wellbeing.</Text>
        <Pressable style={styles.linkBtn} onPress={() => navigation.navigate('About' as never)}>
          <Text style={styles.linkText}>Learn more</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Testimonials</Text>
        <Pressable style={styles.linkBtn} onPress={() => navigation.navigate('Testimonials' as never)}>
          <Text style={styles.linkText}>Read client stories</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get in touch</Text>
        <Pressable style={styles.linkBtn} onPress={() => navigation.navigate('Contact' as never)}>
          <Text style={styles.linkText}>Contact me</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headline: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subhead: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  primaryCta: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  primaryCtaText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#333',
  },
  linkBtn: {
    marginTop: 8,
  },
  linkText: {
    color: '#2563eb',
    fontWeight: '600',
  },
});

