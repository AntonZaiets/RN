import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './LanguageStyles';
import { ArrowSvg } from '../../Icons/ArrowSvg';
import { GlobusSvg } from '../../Icons/GlobusSvg';
import { CheckSvg } from '../../Icons/CheckSvg';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import i18n from '../../Translation/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Language = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [language, setLanguage] = useState('en');

    const changeLanguage = async (lang : any) => {
        try {
            await i18n.changeLanguage(lang); // Ensure this method is called after initialization
            setLanguage(lang);
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };

    useEffect(() => {
        const getLanguage = async () => {
            try {
                const savedLanguage = await AsyncStorage.getItem('appLanguage');
                if (savedLanguage) {
                    setLanguage(savedLanguage); // Set the language based on stored preference
                }
            } catch (error) {
                console.error('Error retrieving language preference:', error);
            }
        };
        getLanguage();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile' as never)}>
                        <ArrowSvg />
                    </TouchableOpacity>
                    <Text style={styles.languageHead}>{t('language.language')}</Text>
                    <TouchableOpacity style={styles.blocks} onPress={() => changeLanguage('en')}>
                        <View style={styles.leftSide}>
                            <GlobusSvg />
                            <Text style={styles.title}>{t('language.english')}</Text>
                        </View>
                        {language === 'en' ? <CheckSvg /> : <View style={styles.grayCircle} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.blocks, { marginBottom: 480 }]} onPress={() => changeLanguage('ar')}>
                        <View style={styles.leftSide}>
                            <GlobusSvg />
                            <Text style={styles.title}>{t('language.arabic')}</Text>
                        </View>
                        {language === 'ar' ? <CheckSvg /> : <View style={styles.grayCircle} />}
                    </TouchableOpacity>
                </View>
                <StatusBar barStyle={'dark-content'} />
            </View>
        </SafeAreaView>
    );
};
