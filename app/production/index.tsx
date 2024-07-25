import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../components/styles/Colours';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const ProductionPage = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    // const handleButtonPress = (button) => {
    //     setSelectedButton(button);
    // };

    const handleButtonPress = (button) => {
        setSelectedButton(button);
        // Navigate to ReelPage when 'Brands' button is pressed
        if (button === 'Brands') {
            router.navigate('(reelpage)/index');
        }
    };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={Colors.white} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Profile</Text>
                <View style={styles.topRightIcons}>
                    <Ionicons name="notifications" size={24} color={Colors.white} style={styles.icon} />
                    <Ionicons name="person-circle" size={24} color={Colors.white} style={styles.profileSmall} />
                </View>
            </View>

            <View style={styles.bannerSection}>
                <Image source={require('../assets/images/production/banner.png')} style={styles.bannerImage} />
                <View style={styles.profileContainer}>
                    <Image source={require('../assets/images/production/profile.png')} style={styles.profileLarge} />
                </View>
            </View>

            <View style={styles.profileDetails}>
                <Text style={styles.profileName}>CD Production House</Text>
                <Text style={styles.profileBio}>
                    Photoshoot | Series | Modeling | Fashion | Drama

                </Text>
                <Text style={styles.profileLink}>www.userlink.com</Text>

                <View style={styles.profileButtons}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.transparentButton]}>
                            <Text style={styles.buttonText}>Appointment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.transparentButton]}>
                            <Text style={styles.buttonText}>Connect</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.iconButton}>
                            <FontAwesome name="search" size={24} color={Colors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../assets/images/profile/Facebook.png')} size={24} style={styles.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../assets/images/profile/twitter_icon.png')} style={styles.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../assets/images/profile/youtube_icon.png')} size={24} style={styles.socialMediaIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.socialMediaSection}>
                <View style={styles.socialMediaItem}>
                    <Text style={styles.socialMediaText}>1.5k+</Text>
                    <Text style={styles.socialMediaSubText}>Projects done</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.socialMediaItem}>
                    <Text style={styles.socialMediaText}>150+</Text>
                    <Text style={styles.socialMediaSubText}>Brands Projects</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.socialMediaItem}>
                    <Text style={styles.socialMediaText}>100+</Text>
                    <Text style={styles.socialMediaSubText}>Shots & series</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>My Portfolio</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Brands' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Brands')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Brands' ? styles.selectedButtonText : null]}>Brands</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Modeling' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Modeling')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Modeling' ? styles.selectedButtonText : null]}>Modeling</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Photoshoot' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Photoshoot')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Photoshoot' ? styles.selectedButtonText : null]}>Photoshoot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Series' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Series')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Series' ? styles.selectedButtonText : null]}>Series</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Our Star' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Our Star')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Our Star' ? styles.selectedButtonText : null]}>Our Star</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageGrid}>


                    <Image source={require('../assets/images/production/team1.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team2.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team3.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team4.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team5.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team6.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team7.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team8.png')} style={styles.gridImage} />

                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    iconButton: {
        marginLeft: 10,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: Colors.dark.background,
    },
    icon: {
        width: 24,
        height: 24,
    },
    headerText: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold',
    },
    topRightIcons: {
        flexDirection: 'row',
        alignItems: 'centre',
    },
    profileSmall: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
    bannerSection: {
        position: 'relative',
    },
    bannerImage: {
        width: '100%',
        height: 200,
    },
    profileContainer: {
        position: 'absolute',
        bottom: -50,
        left: 135,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileLarge: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: Colors.white,
        borderWidth: 2,
    },
    profileDetails: {
        marginTop: 60,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.white,
    },
    profileBio: {
        textAlign: 'left',
        color: Colors.grey,
        marginTop: 10,
        fontSize: 10
    },
    profileLink: {
        color: Colors.blue,
    },
    profileButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    button: {
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    transparentButton: {
        borderColor: Colors.secondary,
        borderWidth: 1,
    },
    buttonText: {
        color: Colors.grey,
        fontSize: 12,
    },
    socialMediaIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    socialMediaSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: Colors.dark.background,
    },
    socialMediaItem: {
        flex: 1,
        alignItems: 'center',
    },
    socialMediaText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
    },
    socialMediaSubText: {
        fontSize: 15,
        color: Colors.white,
    },
    separator: {
        width: 1,
        backgroundColor: Colors.white,
        marginHorizontal: 10,
    },
    section: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    portfolioButton: {

        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.secondary,
        marginHorizontal: 5,
    },
    selectedButton: {
        backgroundColor: Colors.blue,
    },
    selectedButtonText: {

        color: Colors.white,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridImage: {
        width: '31%',
        height: 120,
        marginVertical: 5,
    },
});

export default ProductionPage;
