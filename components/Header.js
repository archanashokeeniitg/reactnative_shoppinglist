import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
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
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Header;
