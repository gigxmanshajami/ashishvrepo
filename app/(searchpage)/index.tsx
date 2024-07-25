import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GStyle } from '../components/styles/Global'; // Ensure GStyle is correctly imported
import { Colors } from '../components/styles/Colours'; // Ensure Colors is correctly imported
import { useNavigation } from '@react-navigation/native';
import Group20Image from '../assets/images/Group 20.png';
import Group18Image from '../assets/images/Group 18.png';
import RectangleImage from '../assets/images/Rectangle.png';
import { router } from 'expo-router';


const SearchPage = () => {

  const navigation = useNavigation();

  const [selectedButton, setSelectedButton] = useState('Influencer');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(null);

  const handleSortOptionPress = (option) => {
    setSelectedSortOption(option);
    setShowSortOptions(false);
  };

  const renderSection = (title, seeMore, images, imageStyle) => (
    <View style={GStyle.sectionContainer}>
      <View style={GStyle.sectionHeader}>
        <Text style={GStyle.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={GStyle.sectionSeeMore}>{seeMore}</Text>
        </TouchableOpacity>
      </View>
      <View style={GStyle.imageContainer}>
        <View style={styles.flexRow}>
          {images.map((image, index) => (
            <View key={index} style={[imageStyle, { marginRight: 10 }]}>

              <Image source={image.uri} style={styles.image} />
              <View style={GStyle.imageFooter}>
                <Image source={image.profileUri} style={GStyle.profileImage} />
                <View>
                  <Text style={GStyle.profileName}>Ayushi Chorsey</Text>
                  <Text style={GStyle.profileFollowers}>{image.followers}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );



  return (
    <ScrollView style={[GStyle.container, { backgroundColor: Colors.dark.background }]}>
      <View style={[GStyle.container, GStyle.paddingMd]}>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={24} color="white" />
          <TextInput
            placeholder="Search Influencer and agency"
            style={styles.searchInput}
            placeholderTextColor="#fff"
          />
          <FontAwesome name="microphone" size={24} color="white" style={styles.micIcon} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'Influencer' ? styles.selectedButton : styles.unselectedButton
            ]}
            onPress={() => setSelectedButton('Influencer')}
          >
            <Text style={selectedButton === 'Influencer' ? styles.selectedButtonText : styles.unselectedButtonText}>
              Influencer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'Production House' ? styles.selectedButton : styles.unselectedButton
            ]}
            onPress={() => setSelectedButton('Production House')}
          >
            <Text style={selectedButton === 'Production House' ? styles.selectedButtonText : styles.unselectedButtonText}>
              Production House
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filterButtonContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowSortOptions(!showSortOptions)}
          >
            <FontAwesome name="sort" size={16} color="white" />
            <Text style={styles.filterButtonText}>Sort</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'Lifestyle' ? styles.selectedButton : styles.unselectedButton
            ]}
            onPress={() => router.navigate('(lifestyle)/index')}
          >
            <Text style={selectedButton === 'Lifestyle' ? styles.selectedButtonText : styles.unselectedButtonText}>
              Lifestyle
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Fashion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Sports</Text>
          </TouchableOpacity>
        </View>

        {showSortOptions && (
          <View style={styles.sortOptionsContainer}>
            {['High Followers', 'Low Followers', 'Price-Low to High', 'Price-High to Low', 'Top Rated'].map((option, index) => (
              <TouchableOpacity key={index} style={styles.sortOption} onPress={() => handleSortOptionPress(option)}>
                <Text style={styles.sortOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}


        {/* <View style={styles.filterButtonContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="sort" size={16} color="white" />
            <Text style={styles.filterButtonText}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Lifestyle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Fashion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Sports</Text>
          </TouchableOpacity>
        </View> */}



        {/* Render your sections */}
        {renderSection(
          'Lifestyle Influencer',
          'See More',
          [
            {
              uri: Group20Image,
              profileUri: 'https://example.com/profile1.jpg',
              name: 'John Doe',
              followers: '1.2M',
            },
            {
              uri: Group18Image,
              profileUri: 'https://example.com/profile2.jpg',
              name: 'Jane Doe',
              followers: '900K',
            },
            {
              uri: RectangleImage,
              profileUri: 'https://example.com/profile3.jpg',
              name: 'Alex Smith',
              followers: '500K',
            },
          ],
          styles.rowImage // Ensure GStyle.tallImage is correctly defined
        )}

        {renderSection(
          'Influencer Work With Brand',
          'See More',
          [
            {
              uri: require('../assets/images/Brand1.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/Brand2.png'),
              name: 'Brand Name',
              followers: '50+M',
            },
            {
              uri: require('../assets/images/Brand3.png'),
              name: 'Brand Name',
              followers: '31+M',
            },
          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Fashion Related Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/fashion-1.png'),
              textLeft: 'Twin_siss',
              textRight: '24k',
            },
            {
              uri: require('../assets/images/fashion-2.png'),
              textLeft: 'Shyne_couple',
              textRight: '44M',
            },
            {
              uri: require('../assets/images/fashion-3.png'),
              textLeft: 'Blude_boy',
              textRight: '14k',
            },
          ],
          styles.rowImage, // Ensure GStyle.tallImage is correctly defined
          { marginBottom: 0 },
          true // showOverlay set to true
        )}

        {/* Travel Influencer Section */}
        <View style={styles.travelInfluencerSection}>
          <View style={styles.header}>
            <Text style={styles.travelInfluencerText}>Travel Influencer</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>See More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imagesContainer}>
            <Image source={require('../assets/images/image1.png')} style={styles.imageWithRadius} />
            <Image source={require('../assets/images/image2.png')} style={styles.imageWithRadius} />
          </View>
        </View>

        {renderSection(
          'Sports',
          '',
          [
            {
              uri: require('../assets/images/sports-image1.png'),
              textLeft: 'Twin_siss',
              textRight: '24k',
            },
            {
              uri: require('../assets/images/sports-image2.png'),
              textLeft: 'Shyne_couple',
              textRight: '44M',
            },
            {
              uri: require('../assets/images/sports-image3.png'),
              textLeft: 'Blude_boy',
              textRight: '14k',
            },
          ],
          styles.rowImage, // Ensure GStyle.tallImage is correctly defined
          { marginBottom: 0 },
          true // showOverlay set to true
        )}

        <View style={styles.travelInfluencerSection}>
          <View style={styles.header}>
            <Text style={styles.travelInfluencerText}>Technology</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>See More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imagesContainer}>
            <Image source={require('../assets/images/tech1.png')} style={styles.imageWithRadius} />
            <Image source={require('../assets/images/tech2.png')} style={styles.imageWithRadius} />
          </View>
        </View>

        {renderSection(
          'Influencer Work With Education',
          'See More',
          [
            {
              uri: require('../assets/images/edu1.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/edu2.png'),
              name: 'Brand Name',
              followers: '50+M',
            },
            {
              uri: require('../assets/images/edu3.png'),
              name: 'Brand Name',
              followers: '31+M',
            },
          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Jewelry Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/Jewelry1.png'),
              // profileUri: require('../assets/images/Jewelry1.png'), 
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/Jewelry2.png'),
              // profileUri: require('../assets/images/Jewelry2.png'), 
              name: 'Brand Name',
              followers: '50+M',
            },
            {
              uri: require('../assets/images/Jewelry3.png'),
              // profileUri: require('../assets/images/Jewelry3.png'), 
              name: 'Brand Name',
              followers: '31+M',
            },
          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Explore Food Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/food1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/food2.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },
            {
              uri: require('../assets/images/food3.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '31+M',
            },
          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Healthy Life With Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/health1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/health2.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },

          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Events Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/events1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/events2.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },
            {
              uri: require('../assets/images/events1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },

          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Entertainment Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/entertain1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/entertain1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },


          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Top Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/top1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/top2.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },
            {
              uri: require('../assets/images/top3.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },


          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Celebrity Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/cele1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/cele2.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },
          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Pet Influencer',
          'See More',
          [
            {
              uri: require('../assets/images/pet1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/pet2.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },
            {
              uri: require('../assets/images/pet3.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },


          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Beauty',
          'See More',
          [
            {
              uri: require('../assets/images/beauty1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/beauty2.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },
            {
              uri: require('../assets/images/beauty3.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },


          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

        {renderSection(
          'Real State',
          'See More',
          [
            {
              uri: require('../assets/images/real1.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '40+M',
            },
            {
              uri: require('../assets/images/real2.png'),
              profileUri: require('../assets/images/profile.png'),
              name: 'Brand Name',
              followers: '50+M',
            },



          ],
          GStyle.squareImage,
          { backgroundColor: Colors.primary }
        )}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: Colors.white,
  },
  micIcon: {
    marginLeft: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 7,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: Colors.blue,
  },
  unselectedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  selectedButtonText: {
    color: Colors.white,
  },
  unselectedButtonText: {
    color: Colors.white,

  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.semiTransparent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  overlayTextLeft: {
    color: Colors.white,
  },
  overlayTextRight: {
    color: Colors.white,
  },
  travelInfluencerSection: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  travelInfluencerText: {
    color: 'white', // Set white text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeMoreText: {
    color: Colors.grey,
    fontSize: 14,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWithRadius: {
    width: '48%',
    height: 150,
    borderRadius: 10,
    backgroundColor: Colors.grey,
    marginBottom: 10,
  },
  sportsSection: {
    marginVertical: 10,
  },
  sectionTitle: {
    color: 'white', // Set white text color
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.dark.background,
  },
  sportsImage: {
    width: '30%', // Adjust width as needed
    height: 150,
    borderRadius: 10,
    backgroundColor: Colors.grey,
    marginBottom: 10,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 2,
    marginLeft: 2
  },
  filterButtonText: {
    color: Colors.white,
    marginLeft: 5,
    fontSize: 10
  },
  sortOptionsContainer: {
    backgroundColor: Colors.dark.background,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    position: 'absolute',
    top: 200,
    zIndex: 999,
    marginLeft: 10
  },
  sortOption: {
    paddingVertical: 10,
  },
  sortOptionText: {
    color: Colors.white,
    fontSize: 14,
  },

});

export default SearchPage;
