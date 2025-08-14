import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ShoppingList() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if(item.trim() !== '') {
      setList([...list, { key: Date.now().toString(), name: item, done:false }]);
      setItem('');
    }
  };

  const toggleDone = (key) => {
    setList(list.map(i => i.key === key ? {...i, done: !i.done} : i));
  };

  return (
    <View>
      <TextInput style={styles.input} placeholder="Añadir producto..." value={item} onChangeText={setItem} />
      <Button title="Añadir" onPress={addItem} />
      <FlatList
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => toggleDone(item.key)}>
            <Text style={{...styles.item, textDecorationLine: item.done ? 'line-through' : 'none'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth:1, padding:8, marginBottom:10, borderRadius:5 },
  item: { padding:5, fontSize:16 }
});
