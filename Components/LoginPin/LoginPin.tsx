import React, {useState} from 'react'
import styles from "../PinCode/PinCodeStyles";
import {Text, TouchableOpacity, View} from "react-native";
import {PhoneSvg} from "../../Icons/PhoneSvg";
import {DeleteSvg} from "../../Icons/DeleteSvg";
import {ContinueButton} from "../ContinueButton/ContinueButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    HomeDashboard: undefined; // Якщо компонент не приймає параметри
    // Інші маршрути, якщо потрібно
};

// Отримуємо тип для навігації
type NavigationProp = StackNavigationProp<RootStackParamList, 'HomeDashboard'>;




export const LoginPin = () => {
    const [code, setCode] = useState([]);
    const navigation = useNavigation<NavigationProp>();

    const addDigit = (digit: number) => {
        if (code.length < 5) {
            setCode([...code, digit]);
        }
    };

    const deleteDigit = () => {
        setCode(prevCode => prevCode.slice(0, -1)); // delete the last digit in array
    };

    const getPinData = async () => {
        try {
            const pin = await AsyncStorage.getItem('userPin');
            console.log(pin.split(',').map(Number));
            console.log(code);
            return pin.split(',').map(Number)   // Split string into array of digits if not null
        } catch (error) {
            console.error('Error retrieving Pin data:', error);
            return null;
        }
    };

    const handlePress = async () => {
        try {
            const storedPin = await getPinData();

            if (storedPin && code && storedPin.length === code.length && storedPin.every((digit, index) => digit === code[index])) {
                 navigation.navigate('HomeDashboard');
            } else {
                console.log('Incorrect PIN');
            }
        } catch (error) {
            console.error('Error comparing Pin data:', error);
        }
    };





    return(
        <>
            <View style={styles.pinCodeContainer}>
                <>
                    <View style={styles.pinCodeContainerTop}>
                        <PhoneSvg />
                        <Text  style={{fontSize: 15, marginTop: 25}}>Enter 5 digits code to login:</Text>
                        <View style={styles.pinCodeDots}>
                            <View style={[styles.pinCodeDot, code.length >= 1 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                            <View style={[styles.pinCodeDot, code.length >= 2 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                            <View style={[styles.pinCodeDot, code.length >= 3 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                            <View style={[styles.pinCodeDot, code.length >= 4 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                            <View style={[styles.pinCodeDot, code.length >= 5 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                        </View>
                        {/*<View>
                            <Text style={styles.errorMessage}>{errorMessage}</Text>
                        </View>*/}
                    </View>
                </>
                <View style={styles.pinCodeContainerBot}>
                    <View style={styles.digits}>
                        <View style={styles.digitsRow}>
                            <TouchableOpacity
                                onPress={() => addDigit(1)}
                            >
                                <Text style={styles.digitStyle}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => addDigit(2)}>
                                <Text style={styles.digitStyle}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => addDigit(3)}>
                                <Text style={styles.digitStyle}>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.digitsRow}>
                            <TouchableOpacity  onPress={() => addDigit(4)}>
                                <Text style={styles.digitStyle}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => addDigit(5)}>
                                <Text style={styles.digitStyle}>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => addDigit(6)}>
                                <Text style={styles.digitStyle}>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.digitsRow}>
                            <TouchableOpacity  onPress={() => addDigit(7)}>
                                <Text style={styles.digitStyle}>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => addDigit(8)}>
                                <Text style={styles.digitStyle}>8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => addDigit(9)}>
                                <Text style={styles.digitStyle}>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.digitsRow}>
                            <View>
                                <Text style={[styles.digitStyle, {color: 'transparent'}]}>0</Text>
                            </View>
                            <TouchableOpacity  onPress={() => addDigit(0)}>
                                <Text style={styles.digitStyle}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{display: 'flex', justifyContent: 'center'}} onPress={deleteDigit}>
                                <View>
                                    <DeleteSvg />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ContinueButton
                        //style={styles.continueButton}
                        bgColor={code.length === 5 ? '#FA8A34' : '#FEE8D6'}
                        disables={code.length !== 5}
                        onPress={handlePress}
                        name={'Continue'}
                    />
                </View>
            </View>
        </>
    );
}
