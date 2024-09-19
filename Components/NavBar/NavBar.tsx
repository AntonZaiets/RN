import React from 'react'
import {TouchableOpacity, View, Text, SafeAreaView} from "react-native";
import {HomeSvg} from "../../Icons/HomeSvg";
import {PortfolioSvg} from "../../Icons/PortfolioSvg";
import {SearchSvg} from "../../Icons/SearchSvg";
import {ProfileSvg} from "../../Icons/ProfileSvg";
import styles from "./NavBarStyles";
import { useRoute } from '@react-navigation/native';

export const NavBar = () => {
    const route = useRoute();
    const colorHome = route.name === 'HomeDashboard' ? '#FA8A34' : '#858C94'
    const fillRule = route.name === 'HomeDashboard' ? 'nonzero' : 'evenodd'
    return(
        <SafeAreaView>
            <>
                <View style={styles.navBar}>
                    <TouchableOpacity style={styles.tabs}>
                        <HomeSvg fill={colorHome} fillRule={fillRule}/>
                        <Text style={route.name === 'HomeDashboard' ? {color: '#FA8A34'} : {color: '#858C94'}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <PortfolioSvg />
                        <Text>Portfolio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <SearchSvg />
                        <Text>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <ProfileSvg />
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>
            </>
        </SafeAreaView>
    )
}