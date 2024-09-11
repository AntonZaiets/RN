import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as SplashScreenLib from 'expo-splash-screen';
import { BitcoinIntroSvg } from "../../Icons/BitcoinIntroSvg";

SplashScreenLib.preventAutoHideAsync();

export const SplashScreen = ({ onHomeLoaded }) => {
    useEffect(() => {

        const handleHideSplash = async () => {
            await new Promise(() => {
                setTimeout(() => {
                    onHomeLoaded();
                }, 2000);
            });
            await SplashScreenLib.hideAsync();
        };
        handleHideSplash();
    }, [onHomeLoaded]);

    return (
        <View style={styles.container}>
            <BitcoinIntroSvg />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
