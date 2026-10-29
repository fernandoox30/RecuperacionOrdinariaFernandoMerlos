import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useCharacters } from '../hooks/useCharacters';
import ApiCard from '../components/ApiCard';

export default function ApiScreen() {
  const { characters, page, totalPages, loading, error, nextPage, prevPage, refresh, endpoint } = useCharacters();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}
    >
      <View style={styles.heading}>
        <View style={styles.apiIcon}>
          <Ionicons name="globe-outline" size={28} color="#FFFFFF" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Rick and Morty</Text>
          <Text style={styles.subtitle}>Datos obtenidos desde una API externa</Text>
        </View>
      </View>

      <View style={styles.endpoint}>
        <Text style={styles.endpointLabel}>ENDPOINT</Text>
        <Text style={styles.endpointText}>{endpoint}</Text>
      </View>

      {loading && !characters.length ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#A83DDB" />
          <Text style={styles.loading}>Consultando API...</Text>
        </View>
      ) : null}

      {error && !characters.length ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>No se pudo cargar la API</Text>
          <Text style={styles.errorText}>{error}</Text>
          <Pressable style={styles.retry} onPress={refresh}>
            <Text style={styles.retryText}>Reintentar</Text>
          </Pressable>
        </View>
      ) : null}

      {characters.map((c) => (
        <ApiCard key={c.id} title={c.title} image={c.image} description={c.description} />
      ))}

      <View style={styles.pagination}>
        <Pressable disabled={page <= 1 || loading} onPress={prevPage} style={[styles.pageButton, page <= 1 && styles.disabled]}>
          <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.pageText}>Página {page} de {totalPages}</Text>
        <Pressable disabled={page >= totalPages || loading} onPress={nextPage} style={[styles.pageButton, page >= totalPages && styles.disabled]}>
          <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 35
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 15
  },
  apiIcon: {
    width: 58,
    height: 58,
    borderRadius: 17,
    backgroundColor: '#A83DDB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '900'
  },
  subtitle: {
    color: '#A9A9B4',
    fontSize: 13,
    marginTop: 3
  },
  endpoint: {
    backgroundColor: '#191920',
    borderRadius: 13,
    padding: 13,
    borderWidth: 1,
    borderColor: '#2B2B35',
    marginBottom: 16
  },
  endpointLabel: {
    color: '#A83DDB',
    fontSize: 11,
    fontWeight: '900',
    marginBottom: 5
  },
  endpointText: {
    color: '#CFCFD7',
    fontSize: 12
  },
  center: {
    alignItems: 'center',
    padding: 35
  },
  loading: {
    color: '#BDBDC7',
    marginTop: 10
  },
  errorBox: {
    backgroundColor: '#291B25',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16
  },
  errorTitle: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 17
  },
  errorText: {
    color: '#C9B8C3',
    marginTop: 6
  },
  retry: {
    alignSelf: 'flex-start',
    backgroundColor: '#A83DDB',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 12
  },
  retryText: {
    color: '#FFFFFF',
    fontWeight: '800'
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  pageButton: {
    backgroundColor: '#A83DDB',
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabled: { opacity: 0.35 },
  pageText: {
    color: '#FFFFFF',
    fontWeight: '800'
  }
});