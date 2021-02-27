import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
//import {Header} from 'react-native/Libraries/NewAppScreen';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Icon
        style={styles.icon}
        name="addchart"
        size={20}
        color="white"
        onPress={() => alert('hi')}
        // onPress={() => deleteItem(item.id)}
      />
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping Default List',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'purple',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  icon: {
    //alignSelf: 'flex-end',
    flexDirection: 'row',
    //justifyContent: 'flex-end',
  },
});

export default Header;
