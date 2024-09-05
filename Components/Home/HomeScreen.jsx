import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions, Modal, TextInput, Image } from "react-native";
import styles from './HomeScreenStyles';
import { ArrowSvg } from "../../Icons/ArrowSvg";
import { UserSvg } from "../../Icons/UserSvg";
import { HandSvg } from "../../Icons/HandSvg";
import { GoldSvg } from "../../Icons/GoldSvg";
import {OilSvg} from "../../Icons/OilSvg";
import {ElectricSvg} from "../../Icons/ElectricSvg";
import {EthereumSvg} from "../../Icons/EthereumSvg";
import {BitcoinSvg} from "../../Icons/BitcoinSvg";
import {TetherSvg} from "../../Icons/TetherSvg";
import {CranSvg} from "../../Icons/CranSvg";
import {FlatSvg} from "../../Icons/FlatSvg";
import {HouseSvg} from "../../Icons/HouseSvg";
import {MountainSvg} from "../../Icons/MountainSvg";
import {RedHuiniaSvg} from "../../Icons/RedHuiniaSvg";
import {BlackHuiniaSvg} from "../../Icons/BlackHuiniaSvg";
import {BitcoinIntroSvg} from "../../Icons/BitcoinIntroSvg";


export default function HomeScreen() {
    const [openSignUpModal, setOpenSignUpModal] = useState(false);
    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    function renderSignUpModal() {
        return (
            <Modal
                visible={openSignUpModal}
                animationType='slide'
                transparent={true}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setOpenSignUpModal(false)}>
                            <ArrowSvg />
                        </TouchableOpacity>
                        <View>
                            <View style={styles.modalHeader}>
                                <View style={styles.modalHeaderText}>
                                    <Text style={styles.modalTitle}>Sign Up</Text>
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
                                        <Text>{passwordVisible ? '👁️' : '👁️‍🗨️'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.modalContinueButton}>
                                <Text style={styles.modalContinueButtonText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
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
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setOpenSignInModal(false)}>
                            <ArrowSvg />
                        </TouchableOpacity>
                        <View>
                            <View style={styles.modalHeader}>
                                <View style={styles.modalHeaderText}>
                                    <Text style={styles.modalTitle}>Login</Text>
                                    <Text style={styles.modalSubtitle}>Personal Account</Text>
                                </View>
                            </View>
                            <View>
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
                                        <Text>{passwordVisible ? '👁️' : '👁️‍🗨️'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.modalContinueButton}>
                                <Text style={styles.modalContinueButtonText}>Continue</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalCreateAccountButton} onPress={() => { setOpenSignInModal(false); setOpenSignUpModal(true); }}>
                                <Text style={styles.modalCreateAccountButtonText}>Create Account</Text>
                                {renderSignUpModal()}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../Icons/bg.png')}
                style={styles.bg}
            />
            <View style={styles.direction}>
                <View style={styles.LeftSide}>
                    <View style={styles.Block}>
                        <BitcoinIntroSvg />
                    </View>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <CranSvg style={styles.image}/>
                            <FlatSvg style={styles.image} />
                            <HouseSvg style={styles.image} />
                        </View>
                        <Text style={styles.imageText}>Crowd real estate</Text>
                    </View>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <MountainSvg style={styles.image}/>
                            <RedHuiniaSvg style={styles.image} />
                            <BlackHuiniaSvg style={styles.image} />
                        </View>
                        <Text style={styles.imageText}>ETFs</Text>
                    </View>
                </View>
                <View style={styles.RightSide}>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <UserSvg style={styles.image}/>
                            <HandSvg style={styles.image} />
                            <UserSvg style={styles.image} />
                        </View>
                        <Text style={styles.imageText}>Crowd lending</Text>
                    </View>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <OilSvg style={styles.image}/>
                            <GoldSvg style={styles.image} />
                            <ElectricSvg style={styles.image} />
                        </View>
                        <Text style={styles.imageText}>Commodities</Text>
                    </View>
                    <View style={styles.imageBg}>
                        <View style={styles.svgContainer}>
                            <EthereumSvg style={styles.image}/>
                            <BitcoinSvg style={styles.image} />
                            <TetherSvg style={styles.image} />
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
}
