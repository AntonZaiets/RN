import React from "react";
import { View, StyleSheet, Image } from "react-native";
/*
import Icon from '../../Icons/btc_poj.jpg';
*/

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{/*Icon*/}} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
});
