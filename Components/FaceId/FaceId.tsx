import React, {useEffect, useState} from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import {useNavigation} from "@react-navigation/native";

export const FaceIDAuthentication = () => {
    let [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        async function authenticate() {
            const result = await LocalAuthentication.authenticateAsync();
            setIsAuthenticated(result.success);
        }
        authenticate();
    }, []);

    if(isAuthenticated) navigation.navigate('Main' as never)

};
