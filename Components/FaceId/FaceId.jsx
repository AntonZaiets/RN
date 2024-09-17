import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export const FaceIDAuthentication = () => {
    const [authenticated, setAuthenticated] = useState(false);

    const authenticate = async () => {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate with Face ID',
        });
        if (result.success) {
            setAuthenticated(true);
            Alert.alert('Success', 'You have been authenticated!');
            // Перенаправлення на головний екран або інші дії після успішної аутентифікації
        } else {
            Alert.alert('Failed', 'Authentication failed, please try again.');
        }
    };

    // Виклик аутентифікації відразу після рендерингу компонента
    React.useEffect(() => {
        authenticate();
    }, []);

    return (
        <View>
            {authenticated ? <Text>Authenticated</Text> : <Text>Authenticating...</Text>}
        </View>
    );
};
