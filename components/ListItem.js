import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text>{item.text}</Text>

        <Icon
          style={styles.icon}
          name="delete"
          size={20}
          color="firebrick"
          // onPress={() => alert(item.id)}
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    // alignItems: 'center',
    borderColor: 'white',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderWidth: 10,
    // borderColor: '#DEBBFD',
  },
  listItemView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    //alignItems: 'center',
    paddingRight: 50,
    alignSelf: 'flex-end',
  },
});

export default ListItem;
