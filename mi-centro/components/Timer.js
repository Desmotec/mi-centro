import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if(running) {
      interval = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <View>
      <Text style={styles.timer}>{seconds}s</Text>
      <Button title={running ? "Pausar" : "Iniciar"} onPress={() => setRunning(!running)} />
      <Button title="Resetear" onPress={() => setSeconds(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  timer: { fontSize:48, textAlign:'center', marginBottom:10 }
});
