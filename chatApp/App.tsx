import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {;
  return (
    <View style={styles.container}>
      <Text>HELLO!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1
  },
});

export default App;
