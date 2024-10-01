import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './Components/Home/HomeScreen';
import { PinCode } from './Components/PinCode/PinCode';
import { HomeDashboard } from './Components/HomeDashboard/HomeDashboard';
import { AboutPost } from './Components/AboutPost/AboutPost';
import { LoginPin } from './Components/LoginPin/LoginPin';
import { Profile } from './Components/Profile/Profile';
import { Search } from './Components/Search/Search';
import { HomeSvg } from './Icons/HomeSvg';
import { PortfolioSvg } from './Icons/PortfolioSvg';
import { SearchSvg } from './Icons/SearchSvg';
import { ProfileSvg } from './Icons/ProfileSvg';
import { Language } from './Components/Language/Language';

// Создаем Tab и Stack Navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Стек для вкладки Home
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
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    if (route.name === 'HomeStack') {
                        return <HomeSvg fill={color} fillRule="evenodd"/>;
                    } else if (route.name === 'PortfolioStack') {
                        return <PortfolioSvg />;
                    } else if (route.name === 'SearchStack') {
                        return <SearchSvg fill={color} />;
                    } else if (route.name === 'ProfileStack') {
                        return <ProfileSvg fill={color} fillRule="evenodd"/>;
                    }
                },
                tabBarActiveTintColor: '#FA8A34',
                tabBarInactiveTintColor: '#858C94',
            })}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{headerShown: false, tabBarLabel: 'Главная' }}
            />
            <Tab.Screen
                name="PortfolioStack"
                component={SearchStack}
                options={{headerShown: false, tabBarLabel: 'Портфолио' }}
            />
            <Tab.Screen
                name="SearchStack"
                component={SearchStack}
                options={{headerShown: false, tabBarLabel: 'Поиск' }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{headerShown: false, tabBarLabel: 'Профиль' }}
            />
        </Tab.Navigator>
    );
};

// Основной компонент приложения
const App = () => {
    return (
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>
    );
};

export default App;
