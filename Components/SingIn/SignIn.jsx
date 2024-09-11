import {Modal, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../Home/HomeScreenStyles";
import {ArrowSvg} from "../../Icons/ArrowSvg";
import React, {useState} from "react";

const renderSignInModal = () => {
    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
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