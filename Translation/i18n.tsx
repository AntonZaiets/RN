import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './locales/en.json';
import ar from './locales/ar.json';

export const resources = {
    en: { translation: en },
    ar: { translation: ar },
};

const loadLanguage = async () => {
    try {
        const savedLanguage = await AsyncStorage.getItem('appLanguage');
        return savedLanguage || 'en';
    } catch (error) {
        console.error('Error loading language from AsyncStorage:', error);
        return 'en';
    }
};

const initI18next = async () => {
    const lng = await loadLanguage();

    return i18next.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        lng,
        fallbackLng: 'en',
        resources,
        initImmediate: false,
    });
};

initI18next().catch((error) => {
    console.error('Error initializing i18next:', error);
});

i18next.on('languageChanged', async (lng) => {
    try {
        await AsyncStorage.setItem('appLanguage', lng);
    } catch (error) {
        console.error('Error saving language to AsyncStorage:', error);
    }
});

export default i18next;
