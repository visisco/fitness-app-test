import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ServiceChip({ label, selected, onPress, style, textStyle }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, selected && styles.selected, style]}> 
      <Text style={[styles.text, selected && styles.textSelected, textStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  selected: {
    backgroundColor: '#e0e7ff',
    borderColor: '#6366f1',
  },
  text: {
    color: '#111827',
  },
  textSelected: {
    color: '#1f2937',
    fontWeight: '700',
  },
});

