import React from 'react';

import {Animated, StyleSheet, View, Text} from 'react-native';
import Navigator from './src/Navigator';



const App = () => {
  
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  
});

export default App;
