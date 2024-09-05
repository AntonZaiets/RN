import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as SplashScreenLib from 'expo-splash-screen';

// Імпорт ваших 16 SVG-файлів
import { BitcoinIntroSvg } from "../../Icons/BitcoinIntroSvg";
import { BitcoinSvg } from "../../Icons/BitcoinSvg";
import {BlackHuiniaSvg} from "../../Icons/BlackHuiniaSvg";
import {RedHuiniaSvg} from "../../Icons/RedHuiniaSvg";
import {CranSvg} from "../../Icons/CranSvg";
import {ElectricSvg} from "../../Icons/ElectricSvg";
import {EthereumSvg} from "../../Icons/EthereumSvg";
import {FlatSvg} from "../../Icons/FlatSvg";
import {GoldSvg} from "../../Icons/GoldSvg";
import {HandSvg} from "../../Icons/HandSvg";
import {HouseSvg} from "../../Icons/HouseSvg";
import {MountainSvg} from "../../Icons/MountainSvg";
import {OilSvg} from "../../Icons/OilSvg";
import {TetherSvg} from "../../Icons/TetherSvg";
import {UserSvg} from "../../Icons/UserSvg";

// Залишаємо сплеш-скрін видимим
SplashScreenLib.preventAutoHideAsync();

export const SplashScreen = ({ onLoadingComplete }) => {
    const [isSvgLoaded, setSvgLoaded] = useState(false);

    const loadResources = async () => {
        try {
            // Симулюємо завантаження SVG
            await new Promise((resolve) => {
                setTimeout(() => {
                    setSvgLoaded(true);
                    resolve();
                }, 2000); // Тут можна замінити таймер на реальні операції завантаження
            });
        } catch (e) {
            console.warn(e);
        } finally {
            await SplashScreenLib.hideAsync();
            onLoadingComplete(); // Сповіщаємо, що всі ресурси завантажені
        }
    };

    useEffect(() => {
        loadResources();
    }, []);

    return (
        <View style={styles.container}>
            {/* Рендеримо SVG */}
            <BitcoinIntroSvg width={100} height={100} />
            {isSvgLoaded && (
                <>
                    <BitcoinSvg width={100} height={100} />
                    <BlackHuiniaSvg width={100} height={100} />
                    <RedHuiniaSvg width={100} height={100} />
                    <CranSvg width={100} height={100} />
                    <ElectricSvg width={100} height={100} />
                    <EthereumSvg width={100} height={100} />
                    <FlatSvg width={100} height={100} />
                    <GoldSvg width={100} height={100} />
                    <HandSvg width={100} height={100} />
                    <HouseSvg width={100} height={100} />
                    <MountainSvg width={100} height={100} />
                    <OilSvg width={100} height={100} />
                    <TetherSvg width={100} height={100} />
                    <UserSvg width={100} height={100} />
                </>
            )}
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
