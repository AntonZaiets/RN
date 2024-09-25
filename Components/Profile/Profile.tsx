import React, {useEffect, useState} from "react";
import styles from './ProfileStyles';
import {StatusBar, SafeAreaView, Text, View, TouchableOpacity} from 'react-native'
import {NavBar} from "../NavBar/NavBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {GlobusSvg} from "../../Icons/GlobusSvg";
import {LogOutSvg} from "../../Icons/LogOutSvg";
import {ArrowSvg} from "../../Icons/ArrowSvg";
import {useNavigation} from "@react-navigation/native";
import {useTranslation} from "react-i18next";


export const Profile = () => {
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        try {
            const storedFirstName = await AsyncStorage.getItem('userFirstName');
            const storedLastName = await AsyncStorage.getItem('userLastName');
            setFirstName(storedFirstName || '');
            setLastName(storedLastName || '');
        } catch (error) {
            console.error('Error retrieving login data:', error);
        }
    };


    const deleteLoginData = async () => {
        try {
            /*await AsyncStorage.removeItem('userToken');*/
            await AsyncStorage.removeItem('userFirstName');
            await AsyncStorage.removeItem('userLastName');
            await AsyncStorage.removeItem('userPin');
            navigation.navigate('Home' as never)
        } catch (error) {
            console.error('Error deleting login data:', error);
        }
    };

    return(
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
            <>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <TouchableOpacity onPress={() => {navigation.navigate('HomeDashboard' as never)}}>
                            <ArrowSvg />
                        </TouchableOpacity>
                        <Text style={styles.settingsHead}>{t('profile.settings')}</Text>
                        <View style={styles.blocks}>
                            <View style={styles.grayCircle}/>
                            <Text style={styles.title}>{firstName} {lastName}</Text>
                        </View>
                        <Text style={styles.basicOtherHead}>Basic</Text>
                        <TouchableOpacity style={styles.blocks} onPress={() => navigation.navigate('Language' as never)}>
                            <GlobusSvg />
                            <Text style={styles.title}>{t('profile.language')}</Text>
                        </TouchableOpacity>
                        <Text style={styles.basicOtherHead}>Other</Text>
                        <TouchableOpacity style={[styles.blocks, {marginBottom: 335}]} onPress={deleteLoginData}>
                            <LogOutSvg />
                            <Text style={styles.title}>{t('profile.log out')}</Text>
                        </TouchableOpacity>
                    </View>
                    <NavBar />
                    <StatusBar  barStyle={'dark-content'}/>
                </View>
            </>
        </SafeAreaView>
    );
}