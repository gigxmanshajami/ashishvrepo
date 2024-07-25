import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/SearchPageStyles'; // Adjust the path as necessary

const Section = ({ title, seeMore, children }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {seeMore && <Text style={styles.seeMore}>See More</Text>}
    </View>
    {children}
  </View>
);

export default Section;
