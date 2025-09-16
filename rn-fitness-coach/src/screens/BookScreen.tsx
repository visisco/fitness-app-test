import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const SERVICES = [
  'Running Training',
  'Weightlifting',
  'Mindfulness',
  'Dieting',
] as const;

type Service = typeof SERVICES[number];

const DURATIONS = [
  { label: '30 min', minutes: 30, price: 80 },
  { label: '60 min', minutes: 60, price: 150 },
] as const;

export default function BookScreen() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<typeof DURATIONS[number] | null>(null);

  const isReady = useMemo(() => !!selectedService && !!selectedDuration, [selectedService, selectedDuration]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Session</Text>

      <Text style={styles.sectionTitle}>1) Choose a service</Text>
      <View style={styles.rowWrap}>
        {SERVICES.map((svc) => (
          <Pressable
            key={svc}
            style={[styles.choice, selectedService === svc && styles.choiceSelected]}
            onPress={() => setSelectedService(svc)}
          >
            <Text style={[styles.choiceText, selectedService === svc && styles.choiceTextSelected]}>{svc}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>2) Duration</Text>
      <View style={styles.rowWrap}>
        {DURATIONS.map((d) => (
          <Pressable
            key={d.minutes}
            style={[styles.choice, selectedDuration?.minutes === d.minutes && styles.choiceSelected]}
            onPress={() => setSelectedDuration(d)}
          >
            <Text style={[styles.choiceText, selectedDuration?.minutes === d.minutes && styles.choiceTextSelected]}>
              {d.label} · ${d.price}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={[styles.primaryCta, !isReady && styles.disabled]} disabled={!isReady} onPress={() => {}}>
        <Text style={styles.primaryCtaText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  choice: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  choiceSelected: {
    backgroundColor: '#e0e7ff',
    borderColor: '#6366f1',
  },
  choiceText: {
    color: '#111827',
  },
  choiceTextSelected: {
    color: '#1f2937',
    fontWeight: '700',
  },
  primaryCta: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryCtaText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  disabled: {
    opacity: 0.4,
  },
});

