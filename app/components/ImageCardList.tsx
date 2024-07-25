import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles/SearchPageStyles'; // Adjust the path as necessary

const ImageCardList = ({ type }) => {
  let data = [];
  if (type === 'tall') {
    data = [1, 2, 3];
  } else if (type === 'square') {
    data = [{ count: '40+M' }, { count: '50+M' }, { count: '31+M' }];
  } else if (type === 'rectangle') {
    data = [1, 2, 3];
  } else if (type === 'squareWithProfile') {
    data = [1, 2];
  }

  return (
    <View style={styles.imageCardList}>
      {data.map((item, index) => (
        <View key={index} style={styles.imageCard}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          {type === 'square' && (
            <View style={styles.brandOverlay}>
              <Text style={styles.brandCount}>{item.count}</Text>
            </View>
          )}
          {type === 'rectangle' && (
            <View style={styles.transparentOverlay}>
              <Text style={styles.profileName}>Twin_siss</Text>
              <Text style={styles.profileFollowers}>24k</Text>
            </View>
          )}
          {(type === 'tall' || type === 'squareWithProfile') && (
            <View style={styles.imageCardFooter}>
              <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
              <View>
                <Text style={styles.profileName}>Profile Name</Text>
                <Text style={styles.profileFollowers}>123k Followers</Text>
              </View>
            </View>
          )}
          {type === 'square' && (
            <View style={styles.imageCardFooter}>
              <Text style={styles.brandName}>Brand Name</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default ImageCardList;
