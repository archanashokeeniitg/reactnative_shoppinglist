import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello First</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
});
export default App;
