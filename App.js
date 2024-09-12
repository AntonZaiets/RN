import React, { useState } from 'react';
import { HomeScreen } from './Components/Home/HomeScreen';
import { SplashScreen } from './Components/SplashScreen/SplashScreen';
import {NavigationContainer} from "@react-navigation/native";
import {PinCode} from "./Components/PinCode/PinCode";
import {createStackNavigator} from "@react-navigation/stack";

const App = () => {
    const [homeLoaded, setHomeLoaded] = useState(false);

    const handleHomeLoaded = () => {
        setHomeLoaded(true);
    };
    const Stack = createStackNavigator();

    return (
        <>
            {/*{!homeLoaded ? <SplashScreen onHomeLoaded={handleHomeLoaded} /> : <HomeScreen onHomeLoaded={handleHomeLoaded} />}*/}
            <NavigationContainer>
                <Stack.Navigator initialRouteName="PinCode">
                    <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="PinCode" component={PinCode} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
