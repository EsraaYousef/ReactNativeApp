import React from 'react';

import {Animated, StyleSheet, View, Text} from 'react-native';
import SignUp from './src/Screens/SignUp';
import Header from './src/Screens/Header';
import SocialButtons from './src/Screens/SocialButtons';



const App = () => {
  
  return (
    <View style={styles.container}>
      <Header />
      <SocialButtons />
      <SignUp />
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
