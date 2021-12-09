import React, {useEffect, useState,useContext} from 'react';
import { ImageBackground, ActivityIndicator, SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import uuid from 'react-native-uuid';
import { AppContext } from '../AppContext';
import {AdMobBanner, setTestDeviceIDAsync} from "expo-ads-admob";


const Home = ({navigation} : {navigation: any}) => {

    React.useEffect(() => {
        setTestDeviceIDAsync("EMULATOR");
     }, []);

    const { ScorecardID } = useContext(AppContext);

    const [CurrentCard, setCurrentCard] = useState(ScorecardID);

    useEffect(() => {
        setCurrentCard(ScorecardID);
    }, [ScorecardID])

    return (
        <View style={styles.container}>

            <View style={styles.footer}>
                <TouchableWithoutFeedback onPress={() => {navigation.navigate('Settings')}}>
                    <Feather 
                        name='settings'
                        color='#fff'
                        size={26}
                    />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {navigation.navigate('HelpMenu')}}>
                    <FontAwesome 
                        name='question-circle-o'
                        color='#fff'
                        size={30}
                    />
                </TouchableWithoutFeedback>
            </View>

            

            <View style={styles.container}>

                <TouchableOpacity onPress={() => navigation.navigate('Scorecard', {cardID: 'new' + uuid.v4()})}>
                    <View style={styles.button}>
                        <ImageBackground 
                            source={require('../assets/chalkboard.jpg')}
                            imageStyle={{resizeMode: 'cover', borderRadius: 8}}
                            style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 200, height: 80}}
                        >
                            <Text style={styles.buttontext}>
                                New
                            </Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SavedScoresScreen')}>
                <View style={styles.button}>
                        <ImageBackground 
                            source={require('../assets/chalkboard.jpg')}
                            imageStyle={{resizeMode: 'cover', borderRadius: 8}}
                            style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 200, height: 80}}
                        >
                            <Text style={styles.buttontext}>
                                Saved
                            </Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Archived')}}>
                <View style={styles.button}>
                        <ImageBackground 
                            source={require('../assets/chalkboard.jpg')}
                            imageStyle={{resizeMode: 'cover', borderRadius: 8}}
                            style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 200, height: 80}}
                        >
                            <Text style={styles.buttontext}>
                                Completed
                            </Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>

            {CurrentCard !== null ? (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{alignSelf: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', marginBottom: 80}}>
                        <Feather 
                            name='corner-down-left'
                            color='#fff'
                            size={25}
                        />
                        <Text style={[styles.buttontext,{color: '#fff', marginLeft: 10}]}>
                            Resume Current Game
                        </Text>
                    </View>
                </TouchableOpacity>
            ) : null}

            <View
            style={{
                shadowOffset: { width: 5, height: 5 },
                width: "90%",
                borderRadius: 5,
                alignSelf: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
                //backgroundColor: 'blue',
            }}
            >
            <AdMobBanner
                bannerSize="smartBannerLandscape"
                //adUnitID="ca-app-pub-3940256099942544/6300978111"
                adUnitID="ca-app-pub-8173570566905121/1015857796" 
                servePersonalizedAds={true}
                onDidFailToReceiveAdWithError={(e) => console.log(e)}
                />
            </View>

        </View>
        
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#155843',
      //alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        width: 212,
        backgroundColor: 'tan',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        margin: 10,
        alignSelf: 'center'
    },
    buttontext: {
        color: '#fff',
        fontFamily: 'chalkboard-regular',
        fontSize: 22,
    },
    footer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 40,
        paddingHorizontal: 40
    }
  });