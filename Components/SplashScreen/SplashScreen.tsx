import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { BitcoinIntroSvg } from "../../Icons/BitcoinIntroSvg";
import {comments, posts} from "../Services/api/post";


export const SplashScreen = ({onLoadingComplete}) => {

    useEffect(() => {
        const handleHideSplash = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            await Promise.all([comments(), posts()]);
            onLoadingComplete();
        };

        handleHideSplash()

    }, []);

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
