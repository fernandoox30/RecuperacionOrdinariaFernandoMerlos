import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import InfoRow from '../components/InfoRow';

export default function StudentScreen({ navigation }) {
  // Cambia únicamente estos datos por los tuyos antes de entregar.
  const student = {
    nombre: 'Marco Fernando Merlos Escobar',
    carnet: '20230453',
    seccion: 'B',
    grupo: '1',
    evaluacion : 'Recuperacion Ordinaria modulo 5  Desarrollo de componentes para dispositivos moviles'
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <View style={styles.logo}>
          <Ionicons name="person" size={42} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>RecuperacionOrdinariaMerlos</Text>
        <Text style={styles.subtitle}>React Native + Expo</Text>
      </View>

      <View style={styles.card}>
      {image ? <Image source={{ uri: "https: //core.ricaldone.edu.sv/logo.png " }} style={styles.image} /> : null}
    </View>
      

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información del estudiante</Text>
        <InfoRow label="NOMBRE" value={student.nombre} />
        <InfoRow label="CARNET" value={student.carnet} />
        <InfoRow label="SECCIÓN" value={student.seccion} />
        <InfoRow label="GRUPO" value={student.grupo} />
        <InfoRow label="Evaluacion" value={student.evaluacion} />
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => navigation.navigate('API')}
      >
        <Text style={styles.buttonText}>Ir a Pantalla 2</Text>
        <Ionicons name="arrow-forward" size={21} color="#FFFFFF" />
      </Pressable>

      <Text style={styles.footer}>Consumo de API • Custom Hook • React Navigation</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 35
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 25
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#A83DDB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    textAlign: 'center'
  },
  subtitle: {
    color: '#B7B7C2',
    marginTop: 5,
    fontSize: 15
  },
  card: {
    backgroundColor: '#15151C',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#292933'
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 14
  },
  button: {
    marginTop: 18,
    backgroundColor: '#A83DDB',
    minHeight: 54,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10
  },
  pressed: { opacity: 0.75, transform: [{ scale: 0.98 }] },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800'
  },
  footer: {
    color: '#747480',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 22
  },
  image: { width: '100%', height: 260, resizeMode: 'cover', backgroundColor: '#24242D' },
});