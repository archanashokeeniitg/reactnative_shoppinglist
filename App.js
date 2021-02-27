import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

//import {uuid} from 'uuidv4';
const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Butter'},
    {id: uuid(), text: 'egg'},
  ]);
  console.log(uuid());

  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'missing Fields');
    } else {
      setItems((prevItems) => {
        return [{id: uuid(), text: text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <Image
        style={styles.image}
        source={{
          uri:
            'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        }}
      />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },

  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
export default App;
