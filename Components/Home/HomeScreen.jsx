import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Modal, TouchableOpacity, TextInput, Image, Alert } from "react-native";
import axios from 'axios';
import styles from './HomeScreenStyles';
import { ArrowSvg } from "../../Icons/ArrowSvg";
import { UserSvg } from "../../Icons/UserSvg";
import { HandSvg } from "../../Icons/HandSvg";
import { GoldSvg } from "../../Icons/GoldSvg";
import { OilSvg } from "../../Icons/OilSvg";
import { ElectricSvg } from "../../Icons/ElectricSvg";
import { EthereumSvg } from "../../Icons/EthereumSvg";
import { BitcoinSvg } from "../../Icons/BitcoinSvg";
import { TetherSvg } from "../../Icons/TetherSvg";
import { CranSvg } from "../../Icons/CranSvg";
import { FlatSvg } from "../../Icons/FlatSvg";
import { HouseSvg } from "../../Icons/HouseSvg";
import { MountainSvg } from "../../Icons/MountainSvg";
import { RedHuiniaSvg } from "../../Icons/RedHuiniaSvg";
import { BlackHuiniaSvg } from "../../Icons/BlackHuiniaSvg";
import { BitcoinIntroSvg } from "../../Icons/BitcoinIntroSvg";
import {EyeSvg} from "../../Icons/EyeSvg";
import {ErrorLabelSvg} from "../../Icons/ErrorLabelSvg";
import {ModalUserSvg} from "../../Icons/ModalUserSvg";
import {useNavigation} from "@react-navigation/native";
import {ContinueButton} from "../ContinueButton/ContinueButton";
import {useUser} from "../UserName/UserName";

export const HomeScreen = ({ onHomeLoaded }) => {
    const [openSignUpModal, setOpenSignUpModal] = useState(false);
    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const [borderColor, setBorderColor] = useState('#ddd')
    const [inputError, setInputError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [openPin, setOpenPin] = useState(false);
    const navigation = useNavigation();
    const { setUser } = useUser(); // Отримай функцію для оновлення користувача

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username: email,
                password: password,
            });

            const userData = await axios.get('https://dummyjson.com/auth/me', {
                headers: {
                    'Authorization': `Bearer ${response.data.token}`,
                },
                withCredentials: true,
            });
            setUser({
                firstName: userData.data.firstName,
                lastName: userData.data.lastName
            });


            if (response.data && response.data.token) {
                setToken(response.data.token);
                setOpenSignInModal(false);
                setInputError(false);
                setErrorMessage('');
                setOpenPin(true);
                navigation.navigate('PinCode');
            }
        } catch (error) {
            navigation.navigate('PinCode');
            Alert.alert('Error', 'Login failed');
            console.error(111111111111, error);
            setBorderColor('#F5A6A9');
            setInputError(true);
            setErrorMessage('Error: Invalid E-mail or Password')
            setOpenPin(false);
        }
    };

    useEffect(() => {
        const loadComponent = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            onHomeLoaded();
        };
    }, [onHomeLoaded]);

    function renderSignUpModal() {
        return (
            <Modal
                visible={openSignUpModal}
                animationType='slide'
                transparent={true}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={() => setOpenSignUpModal(false)} style={styles.modalClose}>
                        <ArrowSvg />
                    </TouchableOpacity>
                    <View>
                        <View style={styles.modalHeader}>
                            <View style={styles.modalUserSvg}>
                                <ModalUserSvg/>
                            </View>
                            <View style={styles.modalHeaderText}>
                                <Text style={styles.modalTitle}>Login</Text>
                                <Text style={styles.modalSubtitle}>Personal Account</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.modalInputContainer}>
                                <Text style={styles.modalInputLabel}>Name</Text>
                                <TextInput style={styles.modalTextInput} placeholder="Name" />
                            </View>
                            <View style={styles.modalInputContainer}>
                                <Text style={styles.modalInputLabel}>E-mail</Text>
                                <TextInput style={styles.modalTextInput} placeholder="E-mail" />
                            </View>
                            <View style={styles.modalInputContainer}>
                                <Text style={styles.modalInputLabel}>Password</Text>
                                <TextInput
                                    style={styles.modalTextInput}
                                    placeholder="Password"
                                    secureTextEntry={!passwordVisible}
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordToggle}>
                                    <Text>{passwordVisible ? <EyeSvg /> : <EyeSvg />}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.modalContinueButton}>
                            <Text style={styles.modalContinueButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }

    function renderSignInModal() {
        return (
            <Modal
                visible={openSignInModal}
                animationType='slide'
                transparent={true}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={() => setOpenSignInModal(false)} style={styles.modalClose}>
                        <ArrowSvg />
                    </TouchableOpacity>
                    <View>
                        <View style={styles.modalHeader}>
                            <View style={styles.modalUserSvg}>
                                <ModalUserSvg/>
                            </View>
                            <View style={styles.modalHeaderText}>
                                <Text style={styles.modalTitle}>Login</Text>
                                <Text style={styles.modalSubtitle}>Personal Account</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.modalInputContainer}>
                                <View><Text style={styles.errorMessage}>{errorMessage}</Text></View>
                                <Text style={styles.modalInputLabel}>E-mail</Text>
                                <TextInput
                                    style={[styles.modalTextInput, {borderColor: borderColor}]}
                                    placeholder='emilys'
                                    value={email}
                                    onChangeText={setEmail}
                                />
                                <TouchableOpacity style={styles.errorLabelTop}>
                                    <Text>{inputError ? <ErrorLabelSvg /> : ''}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalInputContainer}>
                                <Text style={styles.modalInputLabel}>Password</Text>
                                <TextInput
                                    style={[styles.modalTextInput, {borderColor: borderColor}]}
                                    placeholder="emilyspass"
                                    secureTextEntry={!passwordVisible}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility} style={[
                                    inputError ? {position: 'absolute', top: 35, right: 50} : styles.passwordToggle
                                ]}>
                                    <Text>{passwordVisible ? <EyeSvg/> : <EyeSvg/>}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.errorLabelBot}>
                                    <Text>{inputError ? <ErrorLabelSvg /> : ''}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ContinueButton onPress = {handleLogin} bgColor={'#FA8A34'}/>
                        <TouchableOpacity style={styles.modalCreateAccountButton} onPress={() => { setOpenSignUpModal(true); setOpenSignInModal(false); }}>
                            <Text style={styles.modalCreateAccountButtonText}>Create Account</Text>
                            {renderSignUpModal()}
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../Icons/bg.png')}
                style={[
                    (openSignUpModal || openSignInModal) ? { width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 10 } : styles.bg
                ]}
            />
            <View style={styles.direction}>
                <View style={styles.LeftSide}>
                    <View style={styles.Block}>
                        <BitcoinIntroSvg />
                    </View>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <View style={styles.leftIcon}>
                                <CranSvg width={50} height={50} />
                            </View>
                            <View style={styles.centerIcon}>
                                <FlatSvg width={60} height={60} />
                            </View>
                            <View style={styles.rightIcon}>
                                <HouseSvg width={50} height={50} />
                            </View>
                        </View>
                        <Text style={styles.imageText}>Crowd real estate</Text>
                    </View>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <View style={styles.leftIcon}>
                                <MountainSvg width={50} height={50} />
                            </View>
                            <View style={styles.centerIcon}>
                                <RedHuiniaSvg width={60} height={60} />
                            </View>
                            <View style={styles.rightIcon}>
                                <BlackHuiniaSvg width={50} height={50} />
                            </View>
                        </View>
                        <Text style={styles.imageText}>ETFs</Text>
                    </View>
                </View>
                <View style={styles.RightSide}>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <View style={styles.leftIcon}>
                                <UserSvg width={50} height={50} />
                            </View>
                            <View style={styles.centerIcon}>
                                <HandSvg width={60} height={60} />
                            </View>
                            <View style={styles.rightIcon}>
                                <UserSvg width={50} height={50} />
                            </View>
                        </View>
                        <Text style={styles.imageText}>Crowd lending</Text>
                    </View>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <View style={styles.leftIcon}>
                                <OilSvg width={50} height={50} />
                            </View>
                            <View style={styles.centerIcon}>
                                <GoldSvg width={60} height={60} />
                            </View>
                            <View style={styles.rightIcon}>
                                <ElectricSvg width={50} height={50} />
                            </View>
                        </View>
                        <Text style={styles.imageText}>Commodities</Text>
                    </View>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <View style={styles.leftIcon}>
                                <EthereumSvg width={50} height={50} />
                            </View>
                            <View style={styles.centerIcon}>
                                <BitcoinSvg width={60} height={60} />
                            </View>
                            <View style={styles.rightIcon}>
                                <TetherSvg width={50} height={50} />
                            </View>
                        </View>
                        <Text style={styles.imageText}>Crypto</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.SignInButton} onPress={() => setOpenSignInModal(true)}>
                    <Text style={styles.SignInButtonText}>Sign In</Text>
                    {renderSignInModal()}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.SignUpButton, { width: Dimensions.get('window').width * 0.9 }]} onPress={() => setOpenSignUpModal(true)}>
                    <Text style={styles.SignUpButtonText}>Sign Up</Text>
                    {renderSignUpModal()}
                </TouchableOpacity>
            </View>
        </View>
    );
};


