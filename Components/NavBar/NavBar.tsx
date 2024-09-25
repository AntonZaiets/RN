import React, {useEffect} from 'react'
import {TouchableOpacity, View, Text, SafeAreaView} from "react-native";
import {HomeSvg} from "../../Icons/HomeSvg";
import {PortfolioSvg} from "../../Icons/PortfolioSvg";
import {SearchSvg} from "../../Icons/SearchSvg";
import {ProfileSvg} from "../../Icons/ProfileSvg";
import styles from "./NavBarStyles";
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from "react-i18next";


export const NavBar = () => {
    const { t } = useTranslation();
    const route = useRoute();
    const navigation = useNavigation();
    const colorHome = route.name === 'HomeDashboard' ? '#FA8A34' : '#858C94'
    //const colorPortfolio = route.name === 'HomeDashboard' ? '#FA8A34' : '#858C94'
    //const colorSearch = route.name === 'HomeDashboard' ? '#FA8A34' : '#858C94'
    const colorProfile = route.name === 'Profile' ? '#FA8A34' : '#858C94'
    const fillRuleHome = route.name === 'HomeDashboard' ? 'nonzero' : 'evenodd'
    const fillRuleProfile = route.name === 'Profile' ? '#FA8A34' : 'none'
    return(
        <SafeAreaView>
            <>
                <View style={styles.navBar}>
                    <TouchableOpacity style={styles.tabs} onPress = {() => {navigation.navigate('HomeDashboard' as never)}}>
                        <HomeSvg fill={colorHome} fillRule={fillRuleHome}/>
                        <Text style={route.name === 'HomeDashboard' ? {color: '#FA8A34'} : {color: '#858C94'}}>{t('nav.home')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <PortfolioSvg />
                        <Text>{t('nav.portfolio')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <SearchSvg />
                        <Text>{t('nav.search')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress = {() => {navigation.navigate('Profile' as never)}}>
                        <ProfileSvg fill={colorProfile} fillRule={fillRuleProfile}/>
                        <Text style={route.name === 'Profile' ? {color: '#FA8A34'} : {color: '#858C94'}}>{t('nav.profile')}</Text>
                    </TouchableOpacity>
                </View>
            </>
        </SafeAreaView>
    )
}