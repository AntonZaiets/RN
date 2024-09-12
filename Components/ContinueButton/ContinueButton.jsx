import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../ContinueButton/ContinueButtonStyles";

export const ContinueButton = ({ onPress, bgColor, disables }) => {
    return (
        <TouchableOpacity
            style={[styles.modalContinueButton, { backgroundColor: bgColor }]}
            onPress={onPress}
            disabled={disables}
        >
            <Text style={styles.modalContinueButtonText}>Continue</Text>
        </TouchableOpacity>
    );
};
