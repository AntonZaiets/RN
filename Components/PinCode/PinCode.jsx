import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../PinCode/PinCodeStyles";
import { PhoneSvg } from "../../Icons/PhoneSvg";
import { DeleteSvg } from "../../Icons/DeleteSvg";
import { ContinueButton } from "../ContinueButton/ContinueButton";
import { useNavigation } from "@react-navigation/native";
import { FaceIDAuthentication } from "../FaceId/FaceId";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginPin } from "../LoginPin/LoginPin";

export const PinCode = () => {
    const [code, setCode] = useState([]);
    const [isPressed, setIsPressed] = useState(false);
    const [pressedContinueFirstTime, setPressedContinueFirstTime] = useState(false);
    const [pressedContinue, setPressedContinue] = useState(false);
    const [previousCode, setPreviousCode] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [repeatCode, setRepeatCode] = useState('Create a Pin code');
    const [isFaceIDRequired, setIsFaceIDRequired] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // стан для рендерингу компонентів
    const navigation = useNavigation();

    // Додаємо новий useEffect для перевірки наявності токена та пін-коду
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                const pin = await AsyncStorage.getItem('userPin');

                if (token && pin) {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Error retrieving token or pin:', error);
            }
        };

        checkAuthStatus(); // Викликаємо перевірку при завантаженні компонента
    }, []);

    // Функції додавання та видалення цифр
    const addDigit = (digit) => {
        if (code.length < 5) {
            setCode([...code, digit]);
        }
    };

    const deleteDigit = () => {
        setCode(prevCode => prevCode.slice(0, -1)); // Видаляємо останню цифру
    };

    // Збереження пін-коду
    const savePinData = async (pin) => {
        try {
            await AsyncStorage.setItem('userPin', pin);
        } catch (error) {
            console.error('Error saving Pin data:', error);
        }
    };

    // Обробка натискання на кнопку "Continue"
    const clickedContinueButton = () => {
        if (!pressedContinueFirstTime) {
            setPressedContinueFirstTime(true);
            setPreviousCode(code);
            setRepeatCode('Repeat a Pin code');
            setCode([]); // Очищуємо код
        } else {
            setPressedContinue(true);
            if (previousCode.length === code.length && previousCode.every((digit, index) => digit === code[index])) {
                savePinData(previousCode); // Зберігаємо пін-код
                setErrorMessage('');
                setIsFaceIDRequired(true);
                navigation.navigate('HomeDashboard');
            } else {
                setErrorMessage('Wrong Code. Try again!');
                setCode([]); // Очищуємо код у разі невдачі
            }
        }
    };


    if (isAuthenticated) {
        return <LoginPin />;
    } else {
        return (
            <View style={styles.pinCodeContainer}>
                {isFaceIDRequired ? (
                    <FaceIDAuthentication />
                ) : (
                    <>
                        <View style={styles.pinCodeContainerTop}>
                            <View>
                                <PhoneSvg />
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: 600, marginTop: 10 }}>{repeatCode}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, marginTop: 25 }}>Enter 5 digits code:</Text>
                            </View>
                            <View style={styles.pinCodeDots}>
                                <View style={[styles.pinCodeDot, code.length >= 1 ? { backgroundColor: '#FA8A34' } : { backgroundColor: '#BCBFC6' }]} />
                                <View style={[styles.pinCodeDot, code.length >= 2 ? { backgroundColor: '#FA8A34' } : { backgroundColor: '#BCBFC6' }]} />
                                <View style={[styles.pinCodeDot, code.length >= 3 ? { backgroundColor: '#FA8A34' } : { backgroundColor: '#BCBFC6' }]} />
                                <View style={[styles.pinCodeDot, code.length >= 4 ? { backgroundColor: '#FA8A34' } : { backgroundColor: '#BCBFC6' }]} />
                                <View style={[styles.pinCodeDot, code.length >= 5 ? { backgroundColor: '#FA8A34' } : { backgroundColor: '#BCBFC6' }]} />
                            </View>
                            <View>
                                <Text style={styles.errorMessage}>{errorMessage}</Text>
                            </View>
                        </View>

                        <View style={styles.pinCodeContainerBot}>
                            <View style={styles.digits}>
                                {/* Рендеримо кнопки для введення пін-коду */}
                                <View style={styles.digitsRow}>
                                    <TouchableOpacity onPress={() => addDigit(1)}>
                                        <Text style={styles.digitStyle}>1</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => addDigit(2)}>
                                        <Text style={styles.digitStyle}>2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => addDigit(3)}>
                                        <Text style={styles.digitStyle}>3</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.digitsRow}>
                                    <TouchableOpacity onPress={() => addDigit(4)}>
                                        <Text style={styles.digitStyle}>4</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => addDigit(5)}>
                                        <Text style={styles.digitStyle}>5</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => addDigit(6)}>
                                        <Text style={styles.digitStyle}>6</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.digitsRow}>
                                    <TouchableOpacity onPress={() => addDigit(7)}>
                                        <Text style={styles.digitStyle}>7</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => addDigit(8)}>
                                        <Text style={styles.digitStyle}>8</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => addDigit(9)}>
                                        <Text style={styles.digitStyle}>9</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.digitsRow}>
                                    <View>
                                        <Text style={[styles.digitStyle, { color: 'transparent' }]}>0</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => addDigit(0)}>
                                        <Text style={styles.digitStyle}>0</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={deleteDigit}>
                                        <View>
                                            <DeleteSvg />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <ContinueButton
                                style={styles.continueButton}
                                bgColor={code.length === 5 ? '#FA8A34' : '#FEE8D6'}
                                disables={code.length !== 5}
                                onPress={clickedContinueButton}
                                name={'Continue'}
                            />
                        </View>
                    </>
                )}
            </View>
        );
    }
};
