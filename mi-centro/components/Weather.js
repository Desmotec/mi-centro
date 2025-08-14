import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Weather() {
  // Clima fijo por ahora
  const city = "Madrid";
  const temp = "28°C";
  const desc = "Soleado";

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temp}>{temp}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems:'center', marginTop:50 },
  city: { fontSize:24, fontWeight:'bold' },
  temp: { fontSize:48 },
  desc: { fontSize:20 }
});
