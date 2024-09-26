import React, { useState } from 'react';
import { HomeScreen } from './Components/Home/HomeScreen';
import {NavigationContainer} from "@react-navigation/native";
import {PinCode} from "./Components/PinCode/PinCode";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeDashboard} from "./Components/HomeDashboard/HomeDashboard";
import {AboutPost} from "./Components/AboutPost/AboutPost";
import {LoginPin} from "./Components/LoginPin/LoginPin";
import {Profile} from "./Components/Profile/Profile";
import {Language} from "./Components/Language/Language";
import {Search} from "./Components/Search/Search";

const App = () => {
    /*const [homeLoaded, setHomeLoaded] = useState(false);*/

    /*const handleHomeLoaded = () => {
        setHomeLoaded(true);
    };*/
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="PinCode" component={PinCode} />
                <Stack.Screen options={{ headerShown: false }} name="LoginPin" component={LoginPin} />
                <Stack.Screen options={{ headerShown: false }} name="HomeDashboard" component={HomeDashboard} />
                <Stack.Screen options={{ headerShown: false }} name="AboutPost" component={AboutPost} />
                <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
                <Stack.Screen options={{ headerShown: false }} name="Language" component={Language} />
                <Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
