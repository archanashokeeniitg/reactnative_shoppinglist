import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  console.log('text', text);
  const textChanged = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={textChanged}
        placeholder="Enter todo here.."
        //value={value}
      />
      <TouchableOpacity style={styles.button} onPress={() => addItem(text)}>
        <Text style={styles.button}> Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    // color: 'purple',
    // borderColor: 'purple',
    backgroundColor: '#DDA0DD',
    //color: '#841584',
    fontSize: 20,
    color: 'purple',
    textAlign: 'center',
    // borderWidth: 1,
    //borderColor: 'purple',
    // backgroundColor: '#68a0cf',
    // overflow: 'hidden',
    //borderRadius: 5,
    padding: 5,
    margin: 10,
    fontSize: 16,
  },
  textInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 30,
    margin: 30,
  },
});

export default AddItem;
