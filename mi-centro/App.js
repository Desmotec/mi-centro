import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Notes from './components/Notes';
import ShoppingList from './components/ShoppingList';
import Timer from './components/Timer';
import Weather from './components/Weather';

export default function App() {
  const [tab, setTab] = useState('Notas');

  const renderTab = () => {
    switch(tab) {
      case 'Notas': return <Notes />;
      case 'Lista': return <ShoppingList />;
      case 'Cronómetro': return <Timer />;
      case 'Clima': return <Weather />;
      default: return <Notes />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderTab()}</View>
      <View style={styles.tabs}>
        {['Notas','Lista','Cronómetro','Clima'].map(t => (
          <TouchableOpacity key={t} onPress={() => setTab(t)} style={styles.tabButton}>
            <Text style={styles.tabText}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, marginTop:40 },
  content: { flex: 1, padding: 10 },
  tabs: { flexDirection:'row', justifyContent:'space-around', borderTopWidth:1, padding:10 },
  tabButton: {},
  tabText: { fontSize:16, fontWeight:'bold' }
});
