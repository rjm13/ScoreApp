import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { AppContext } from './AppContext';

import AppNavigation from './Navigation/AppNavigation'

StatusBar.setBarStyle("light-content");

const App = () => {

  const [userID, setUserID] = useState({});
  const [ScorecardID, setScorecardID] = useState<string|null>(null);

  let [fontsLoaded] = useFonts({
    //'chalkduster': require('./assets/fonts/Chalkduster.ttf'),
    'chalkboard-regular': require('./assets/fonts/chalkboard-se-regular.ttf'),
    'chalkboard-light': require('./assets/fonts/chalkboard-se-light.ttf'),
    'chalkboard-bold': require('./assets/fonts/chalkboard-se-bold.ttf'),
    'boardgame': require('./assets/fonts/kidsboardgamefont.ttf'),
  });

    if (!fontsLoaded) {
      return <AppLoading />;
      } else {
    return (
      <AppContext.Provider value={{
        userID,
        setUserID: (user: {}) => setUserID(user),
        ScorecardID,
        setScorecardID: (id: string | null) => setScorecardID(id),
      }}>
        <AppNavigation/>
      </AppContext.Provider>
    );
  }
}
export default App;
