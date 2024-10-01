import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../Home/HomeScreen';
import { PinCode } from '../PinCode/PinCode';
import { HomeDashboard } from '../HomeDashboard/HomeDashboard';
import { AboutPost } from '../AboutPost/AboutPost';
import { LoginPin } from '../LoginPin/LoginPin';
import { Profile } from '../Profile/Profile';
import { Search } from '../Search/Search';
import { HomeSvg } from '../../Icons/HomeSvg';
import { PortfolioSvg } from '../../Icons/PortfolioSvg';
import { SearchSvg } from '../../Icons/SearchSvg';
import { ProfileSvg } from '../../Icons/ProfileSvg';
import { Language } from '../Language/Language';
import {useTranslation} from "react-i18next";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeDashboard"
                component={HomeDashboard}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Language"
                component={Language}
                options={{ headerShown: false, title: 'Язык' }}
            />
        </Stack.Navigator>
    );
};


const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};


const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const MainTabNavigator = () => {
    const {t} = useTranslation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    if (route.name === 'HomeStack') {
                        return <HomeSvg fill={color} />;
                    } else if (route.name === 'PortfolioStack') {
                        return <PortfolioSvg fill={color}/>;
                    } else if (route.name === 'SearchStack') {
                        return <SearchSvg fill={color} />;
                    } else if (route.name === 'ProfileStack') {
                        return <ProfileSvg fill={color}/>;
                    }
                },
                tabBarActiveTintColor: '#FA8A34',
                tabBarInactiveTintColor: '#858C94',
            })}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{headerShown: false, tabBarLabel: t('nav.home') }}
            />
            <Tab.Screen
                name="PortfolioStack"
                component={SearchStack}
                options={{headerShown: false, tabBarLabel: t('nav.portfolio') }}
            />
            <Tab.Screen
                name="SearchStack"
                component={SearchStack}
                options={{headerShown: false, tabBarLabel: t('nav.search') }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{headerShown: false, tabBarLabel: t('nav.profile') }}
            />
        </Tab.Navigator>
    );
};


export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PinCode" component={PinCode} options={{ headerShown: false }} />
                <Stack.Screen name="LoginPin" component={LoginPin} options={{ headerShown: false }} />
                <Stack.Screen name="AboutPost" component={AboutPost} options={{ headerShown: false }} />

                <Stack.Screen
                    name="Main"
                    component={MainTabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
