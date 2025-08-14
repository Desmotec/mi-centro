import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function Notes() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if(note.trim() !== '') {
      setNotes([...notes, { key: Date.now().toString(), text: note }]);
      setNote('');
    }
  };

  return (
    <View>
      <TextInput style={styles.input} placeholder="Escribe una nota..." value={note} onChangeText={setNote} />
      <Button title="Añadir" onPress={addNote} />
      <FlatList data={notes} renderItem={({item}) => <Text style={styles.note}>{item.text}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth:1, padding:8, marginBottom:10, borderRadius:5 },
  note: { padding:5, fontSize:16 }
});
