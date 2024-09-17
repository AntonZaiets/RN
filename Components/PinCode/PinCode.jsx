import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Alert} from "react-native";
import styles from "../PinCode/PinCodeStyles";
import {PhoneSvg} from "../../Icons/PhoneSvg";
import {DeleteSvg} from "../../Icons/DeleteSvg";
import {ContinueButton} from "../ContinueButton/ContinueButton";
import {useNavigation} from "@react-navigation/native";
import {FaceIDAuthentication} from "../FaceId/FaceId";


export const PinCode = () => {
    const [code, setCode] = useState([]);
    const [isPressed, setIsPressed] = useState(false);
    const [pressedContinueFirstTime, setPressedContinueFirstTime] = useState(false)
    const [pressedContinue, setPressedContinue] = useState(false)
    const [previousCode, setPreviousCode] = useState([]);
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState('')
    const [repeatCode, setRepeatCode] = useState('Create a Pin code')
    const [isFaceIDRequired, setIsFaceIDRequired] = useState(false);



    const addDigit = (digit) => {
        if (code.length < 5) {
            setCode([...code, digit]);
        }
    };

    const deleteDigit = () => {
        setCode(prevCode => prevCode.slice(0, -1)); // delete the last digit in array
    };


    const clickedContinueButton = () => {
        if (!pressedContinueFirstTime) {
            // Перший раз натискається кнопка продовження
            setPressedContinueFirstTime(true);
            setPreviousCode(code);
            setRepeatCode('Repeat a Pin code');
            setCode([]); // Очистити код
        } else {
            // Перевіряємо повторений код
            setPressedContinue(true);
            if (previousCode.length === code.length && previousCode.every((digit, index) => digit === code[index])) {
                setErrorMessage('');
                setIsFaceIDRequired(true);  // Запускаємо Face ID
                navigation.navigate('HomeDashboard');
            } else {
                setErrorMessage('Wrong Code. Try again!');
                setCode([]); // Очистити код у разі невдачі
            }
        }
    };




    return(
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
                        <Text style={{fontSize: 15, fontWeight: 600, marginTop: 10}}>{repeatCode}</Text>
                    </View>
                    <View>
                        <Text  style={{fontSize: 15, marginTop: 25}}>Enter 5 digits code:</Text>
                    </View>
                    <View style={styles.pinCodeDots}>
                        <View style={[styles.pinCodeDot, code.length >= 1 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                        <View style={[styles.pinCodeDot, code.length >= 2 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                        <View style={[styles.pinCodeDot, code.length >= 3 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                        <View style={[styles.pinCodeDot, code.length >= 4 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                        <View style={[styles.pinCodeDot, code.length >= 5 ? {backgroundColor: '#FA8A34'} : {backgroundColor: '#BCBFC6'}]}/>
                    </View>
                    <View>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </View>
                </View>
            </>
            )}
            <View style={styles.pinCodeContainerBot}>
                <View style={styles.digits}>
                    <View style={styles.digitsRow}>
                        <TouchableOpacity
                            onPress={() => addDigit(1)}
                            onPressIn={() => setIsPressed(true)}
                            onPressOut={() => setIsPressed(false)}
                            style={isPressed ? styles.buttonPressed : styles.button}
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
                    style={styles.continueButton}
                    bgColor={code.length === 5 ? '#FA8A34' : '#FEE8D6'}
                    disables={code.length !== 5}
                    onPress={clickedContinueButton}
                />
            </View>
        </View>
    )
}

