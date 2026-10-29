import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Tarjeta reutilizable: solo recibe datos por props y los dibuja.
export default function ApiCard({ title, image, description }) {
  return (
    <View style={styles.card}>
      {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1B1B23',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#2B2B36',
    marginBottom: 12,
    overflow: 'hidden'
  },
  image: { width: '100%', height: 260, resizeMode: 'cover', backgroundColor: '#24242D' },
  info: { padding: 15 },
  title: { color: '#FFFFFF', fontSize: 18, fontWeight: '800', marginBottom: 7 },
  description: { color: '#C9C9D2', fontSize: 14, lineHeight: 20 }
});
