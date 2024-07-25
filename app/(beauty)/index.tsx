// app/beauty/index.jsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BeautyPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Beauty Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BeautyPage;
