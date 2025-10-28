import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import * as Calendar from 'expo-calendar';

type Props = {
  route: {
    params: {
      service: string;
      minutes: number;
      price: number;
      datetime: string; // ISO
    };
  };
};


export default function ConfirmationScreen({ route }: Props) {
  const { service, minutes, price, datetime } = route.params;
  const [adding, setAdding] = useState(false);

  const onAddToCalendar = async () => {
    try {
      setAdding(true);
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Calendar access is required to add the event.');
        return;
      }

      const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      const calendarId = calendars[0]?.id;

      const startDate = new Date(datetime);
      const endDate = new Date(startDate.getTime() + minutes * 60 * 1000);

      await Calendar.createEventAsync(calendarId!, {
        title: `${service} Coaching Session`,
        startDate,
        endDate,
        timeZone: undefined,
        notes: `Paid $${price}.`,
      });

      Alert.alert('Added to Calendar', 'Your session was added to your calendar.');
    } catch (e) {
      Alert.alert('Could not add event', String(e));
    } finally {
      setAdding(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment successful</Text>
      <Text style={styles.body}>
        {service} · {minutes} min · ${price}
      </Text>
      <Text style={styles.body}>{new Date(datetime).toLocaleString()}</Text>

      <Pressable style={[styles.primaryCta, adding && styles.disabled]} disabled={adding} onPress={onAddToCalendar}>
        <Text style={styles.primaryCtaText}>{adding ? 'Adding…' : 'Add to Calendar'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  body: { fontSize: 16, color: '#333', marginBottom: 8 },
  primaryCta: { backgroundColor: '#2563eb', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 16 },
  primaryCtaText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  disabled: { opacity: 0.5 },
});

