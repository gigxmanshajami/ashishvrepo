import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '../components/styles/Colours';

const { height } = Dimensions.get('window');

const ReelPage = () => {
    return (
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.contentContainer} 
            pagingEnabled
            showsVerticalScrollIndicator={false}
        >
            {[...Array(5)].map((_, index) => (
                <View key={index} style={styles.reelContainer}>
                    <View style={styles.topSection}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-down" size={24} color={Colors.white} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Reel</Text>
                        <View style={styles.topRightIcons}>
                            <Feather name="bookmark" size={24} color={Colors.white} style={styles.icon} />
                            <Ionicons name="camera" size={24} color={Colors.white} style={styles.icon} />
                        </View>
                    </View>
                    <Text style={styles.eventText}>
                        JOIN EVENTS ON 23 TO 24{'\n'}TAJBAG CAFES
                    </Text>
                    <Image source={require('../assets/images/reels/mainImage.png')} style={styles.mainImage} />
                    <View style={styles.profileSection}>
                        <Image source={require('../assets/images/production/team1.png')} style={styles.profileImage} />
                        <Text style={styles.profileName}>Influencer Name</Text>
                        <Ionicons name="checkmark-circle" size={14} color={Colors.blue} />
                        <TouchableOpacity style={styles.followButton}>
                            <Text style={styles.followButtonText}>+Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.descriptionText}>
                        The game in Japan was amazing and I want to share some photos 🤗🔥
                    </Text>
                    <View style={styles.statsSection}>
                        <Text style={styles.statsText}>37,256 views</Text>
                        <Text style={styles.statsText}>124k Followers</Text>
                    </View>
                    <View style={styles.interactionSection}>
                        <Ionicons name="heart-outline" size={24} color={Colors.white} style={styles.icon} />
                        <Ionicons name="chatbubble-outline" size={24} color={Colors.white} style={styles.icon} />
                        <Ionicons name="ellipsis-horizontal" size={24} color={Colors.white} style={styles.icon} />
                        <Text style={styles.collaborateText}>+Collaborations</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    contentContainer: {
        paddingVertical: 10,
    },
    reelContainer: {
        height: height - 20,
        paddingHorizontal: 10,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
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
    icon: {
        marginLeft: 10,
    },
    eventText: {
        textAlign: 'center',
        backgroundColor: Colors.white,
        color: Colors.black,
        fontSize: 16,
        padding: 10,
        marginVertical: 10,
    },
    mainImage: {
        width: '100%',
        height: '40%',
        marginBottom: 10,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    profileName: {
        color: Colors.white,
        marginRight: 5,
    },
    followButton: {
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: Colors.white,
        padding: 5,
        borderRadius: 5,
    },
    followButtonText: {
        color: Colors.white,
    },
    descriptionText: {
        color: Colors.white,
        marginBottom: 10,
    },
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    statsText: {
        color: Colors.white,
    },
    interactionSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    collaborateText: {
        color: Colors.white,
        marginLeft: 'auto',
    },
});

export default ReelPage;
