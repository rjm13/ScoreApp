//this is the main navigation function that contains the navigation container

import React, {useState, useEffect, useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AppContext } from '../AppContext';

import Home from '../Screens/Home';
import Scorecard from '../Screens/Scorecard';
import HelpMenu from '../Screens/HelpMenuScreen';
import Terms from '../Screens/Terms';
import SavedScoresScreen from '../Screens/SavedScoresScreen';
import Archived from '../Screens/Archived';
import Settings from '../Screens/Settings';

const Stack = createNativeStackNavigator ();

const AppNavigation = () => {

    //get context for storyID
    const { userID } = useContext(AppContext);

    console.log(userID)

    return (  
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                >
                   <Stack.Screen 
                        name="Home" 
                        component={Home} 
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="Scorecard" 
                        component={Scorecard} 
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="HelpMenu" 
                        component={HelpMenu} 
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="SavedScoresScreen" 
                        component={SavedScoresScreen} 
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="Archived" 
                        component={Archived} 
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="Settings" 
                        component={Settings} 
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="Terms" 
                        component={Terms} 
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default AppNavigation;