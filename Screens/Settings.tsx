import React, {useState} from 'react';
import { View, Text, StyleSheet, Share, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal, Portal, Provider } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width

const SettingMenu = ({navigation} : any) => {


//confirm clearing the app cache modal
    const [confirmModal, setConfirmModal] = useState(false);
    
    const showConfirmModal = () => setConfirmModal(true);

    const hideConfirmModal = () => setConfirmModal(false);

    const clearModalContainerStyle = {backgroundColor: 'transparent', padding: 20};


    const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
        }
      
        console.log('Done.')
      }
      

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'ScoreBoard | The Universal Score Keeper App',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    }

    return (
        <Provider>
            <View>
                <Portal>
                    <Modal visible={confirmModal} onDismiss={hideConfirmModal} contentContainerStyle={clearModalContainerStyle}>
                        <View style={{ padding: 20, backgroundColor: '#fff', borderRadius: 15,}}>
                            <View style={{ alignItems: 'center', marginVertical: 40}}>
                                <Text style={{fontSize: 16, fontFamily: 'chalkboard-regular', textAlign: 'center'}}>
                                    Are you sure you want to erase the app cache? This will permentantly delete all saved scorecards and statistics.
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center'}}>
                                <TouchableOpacity onPress={clearAll}>
                                    <View style={{ width: 200, height: 50, borderRadius: 25, backgroundColor: '#d92121', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{color: '#fff', fontFamily: 'chalkboard-regular', fontSize: 18, textAlign: 'center'}}>
                                            Clear cache
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </Portal>
                <Animatable.View animation='bounceInDown' style={{ flexDirection: 'row', height: 90, borderBottomRightRadius: 20, borderBottomLeftRadius: 20,
                                backgroundColor: '#155843', alignItems: 'flex-end', paddingBottom: 20, paddingLeft: 20}}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='chevron-left' color='#fff' size={25}/>
                            <Text style={{fontFamily: 'chalkboard-regular', color: '#fff', fontSize: 18, marginLeft: 10 }}>
                                Settings
                            </Text> 
                        </View>
                    </TouchableWithoutFeedback>
                </Animatable.View>

                <View style={{marginTop: 20}}>
                    <TouchableWithoutFeedback onPress={showConfirmModal}>
                        <View style={{width: SCREEN_WIDTH, marginHorizontal: 30, marginVertical: 10}}>  
                            <Text style={{ fontFamily: 'chalkboard-regular', fontSize: 16}}>
                                Clear app cache
                            </Text>
                        </View>   
                    </TouchableWithoutFeedback>
                </View>

                <View style={{marginTop: 20}}>
                    <TouchableWithoutFeedback onPress={onShare}>
                        <View style={{width: SCREEN_WIDTH, marginHorizontal: 30, marginVertical: 10}}>  
                            <Text style={{ fontFamily: 'chalkboard-regular', fontSize: 16}}>
                                Share the app
                            </Text>
                        </View>   
                    </TouchableWithoutFeedback>
                </View>
                
            </View>
        </Provider>
    )
}

export default SettingMenu;