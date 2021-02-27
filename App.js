import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import ListItem from './components/ListItem';
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

      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />

      <Text></Text>
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
