import React, { useState } from 'react';
import { HomeScreen } from './Components/Home/HomeScreen';
import {NavigationContainer} from "@react-navigation/native";
import {PinCode} from "./Components/PinCode/PinCode";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeDashboard} from "./Components/HomeDashboard/HomeDashboard";
import {UserProvider} from "./Components/UserName/UserName";
import {AboutPost} from "./Components/AboutPost/AboutPost";

const App = () => {
    /*const [homeLoaded, setHomeLoaded] = useState(false);*/

    /*const handleHomeLoaded = () => {
        setHomeLoaded(true);
    };*/
    const Stack = createStackNavigator();

    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="PinCode" component={PinCode} />
                    <Stack.Screen options={{ headerShown: false }} name="HomeDashboard" component={HomeDashboard} />
                    <Stack.Screen options={{ headerShown: false }} name="AboutPost" component={AboutPost} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
