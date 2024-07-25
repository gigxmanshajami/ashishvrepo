import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
// import { useNavigation } from '@react-navigation/native';

import { Colors } from '../components/styles/Colours';
import { router } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ProfilePage = () => {
    const navigation = useLocalSearchParams();
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (button) => {
        setSelectedButton(button);
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
                <Image source={require('../assets/images/profile/profile-banner.png')} style={styles.bannerImage} />
                <View style={styles.profileContainer}>
                    <Image source={require('../assets/images/profile/profile.png')} style={styles.profileLarge} />
                    <View style={styles.profileButtons}>

                        <TouchableOpacity style={[styles.button, styles.transparentButton, selectedButton === '+Follow' ? styles.selectedButton : null]} onPress={() => handleButtonPress('+Follow')} >
                            <Text style={[styles.buttonText, selectedButton === '+Follow' ? styles.selectedButtonText : null]} >+Follow</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.transparentButton, selectedButton === 'Message' ? styles.selectedButton : null]} onPress={() => handleButtonPress('Message')}>
                            <Text style={[styles.buttonText, selectedButton === 'Message' ? styles.selectedButtonText : null]}>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.transparentButton, selectedButton === 'Connect' ? styles.selectedButton : null]} onPress={() => handleButtonPress('Connect')}>
                            <Text style={[styles.buttonText, selectedButton === 'Connect' ? styles.selectedButtonText : null]}>Connect</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.transparentButton, styles.transparentButton, selectedButton === 'dots-vertical' ? styles.selectedButton : null]} onPress={() => handleButtonPress('dots-vertical')}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.grey} />

                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.profileDetails}>
                <Text style={styles.profileName}>User Name</Text>
                <Text style={styles.profileBio}>
                    Lifestyle Influencer | Blogger | Beauty{'\n'}
                    Cosmo | Model | Jewelry | Fashion{'\n'}
                    <Text style={styles.profileLink}>www.userlink.com</Text>
                </Text>
            </View>

            <View style={styles.socialMediaSection}>
                <View style={styles.socialMediaItem}>
                    <Image source={require('../assets/images/profile/Facebook.png')} style={styles.socialMediaIcon} />
                    <Text style={styles.socialMediaText}>12.0k Followers</Text>
                </View>
                <View style={styles.socialMediaItem}>
                    <Image source={require('../assets/images/profile/youtube_icon.png')} style={styles.socialMediaIcon} />
                    <Text style={styles.socialMediaText}>12M Followers</Text>
                </View>
                <View style={styles.socialMediaItem}>
                    <Image source={require('../assets/images/profile/twitter_icon.png')} style={styles.socialMediaIcon} />
                    <Text style={styles.socialMediaText}>12.0k Followers</Text>
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Collaboration</Text>
                    <TouchableOpacity>
                        <Text style={[styles.sectionSeeMore, { color: Colors.whitesmoke }]}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageRow}>
                    <Image source={require('../assets/images/profile/collabo1.png')} style={styles.circleImage} />
                    <Image source={require('../assets/images/profile/collabo2.png')} style={styles.circleImage} />
                    <Image source={require('../assets/images/profile/collabo3.png')} style={styles.circleImage} />
                    <Image source={require('../assets/images/profile/collabo4.png')} style={styles.circleImage} />
                    <Image source={require('../assets/images/profile/collabo5.png')} style={styles.circleImage} />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>My Portfolio</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Top 10' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Top 10')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Top 10' ? styles.selectedButtonText : null]}>Top 10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Set Profile' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Set Profile')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Set Profile' ? styles.selectedButtonText : null]}>Set Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Advertisement' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Advertisement')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Advertisement' ? styles.selectedButtonText : null]}>Advertisement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Events' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Events')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Events' ? styles.selectedButtonText : null]}>Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Shopping' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Shopping')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Shopping' ? styles.selectedButtonText : null]}>Shopping</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageGrid}>
                    <Image source={require('../assets/images/profile/adv1.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv2.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv3.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv4.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv5.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv6.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv7.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv8.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv9.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv10.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv11.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/profile/adv12.png')} style={styles.gridImage} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
        alignItems: 'center',
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
        left: 20,
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
        paddingHorizontal: 20,
        alignItems: 'left',
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
    },
    profileLink: {
        color: Colors.white,
    },
    profileButtons: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 60,
    },
    button: {
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.white,
        marginHorizontal: 3,
    },
    buttonText: {
        color: Colors.grey,
        fontSize: 8,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    transparentButton: {
        backgroundColor: 'transparent',
        borderColor: Colors.secondary,
    },
    socialMediaSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.grey,
    },
    socialMediaItem: {
        alignItems: 'center',
    },
    socialMediaIcon: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
    socialMediaText: {
        color: Colors.white,
    },
    section: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        color: Colors.white,
    },
    sectionSeeMore: {
        fontSize: 14,

    },
    imageRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    circleImage: {
        // width: '19%',
        // // height: 100,
        // borderRadius: 50,
        // marginBottom: 10,
        width: 60,
        height: 60,
        borderRadius: 60,
        borderColor: Colors.primary,
        borderWidth: 2,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    portfolioButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.secondary,
        marginHorizontal: 5,
        padding: 5,
    },
    selectedButton: {
        backgroundColor: Colors.white,
    },
    selectedButtonText: {
        color: Colors.primary,
    },

    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridImage: {
        width: '30%',
        height: 100,
        marginBottom: 10,
    },
});

export default ProfilePage;
