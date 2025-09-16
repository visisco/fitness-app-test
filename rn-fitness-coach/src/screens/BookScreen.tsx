import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ServiceChip from '@components/ServiceChip';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { CHECKOUT_URLS } from '@config/payments';

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
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const navigation = useNavigation<any>();

  const isReady = useMemo(() => !!selectedService && !!selectedDuration && !!date && !!time, [selectedService, selectedDuration, date, time]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Session</Text>

      <Text style={styles.sectionTitle}>1) Choose a service</Text>
      <View style={styles.rowWrap}>
        {SERVICES.map((svc) => (
          <ServiceChip key={svc} label={svc} selected={selectedService === svc} onPress={() => setSelectedService(svc)} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>2) Duration</Text>
      <View style={styles.rowWrap}>
        {DURATIONS.map((d) => (
          <ServiceChip
            key={d.minutes}
            label={`${d.label} · $${d.price}`}
            selected={selectedDuration?.minutes === d.minutes}
            onPress={() => setSelectedDuration(d)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>3) Pick a date</Text>
      <View style={styles.pickerRow}>
        <DateTimePicker
          mode="date"
          value={date ?? new Date()}
          onChange={(_, d) => d && setDate(d)}
        />
      </View>

      <Text style={styles.sectionTitle}>4) Pick a time</Text>
      <View style={styles.pickerRow}>
        <DateTimePicker
          mode="time"
          value={time ?? new Date()}
          onChange={(_, d) => d && setTime(d)}
        />
      </View>

      <Pressable
        style={[styles.primaryCta, !isReady && styles.disabled]}
        disabled={!isReady}
        onPress={() => {
          if (!selectedDuration) return;
          const checkoutUrl = CHECKOUT_URLS[selectedDuration.minutes as 30 | 60];
          navigation.navigate('Checkout', {
            service: selectedService,
            minutes: selectedDuration.minutes,
            price: selectedDuration.price,
            datetime: new Date(
              (date ?? new Date()).getFullYear(),
              (date ?? new Date()).getMonth(),
              (date ?? new Date()).getDate(),
              (time ?? new Date()).getHours(),
              (time ?? new Date()).getMinutes(),
              0,
              0,
            ).toISOString(),
            checkoutUrl,
          });
        }}
      >
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
  pickerRow: {
    marginBottom: 16,
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

