import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./ContinueButtonStyles";

export const ContinueButton = ({ onPress, bgColor, disables, name }) => {
    return (
        <TouchableOpacity
            style={[styles.modalContinueButton, { backgroundColor: bgColor }]}
            onPress={onPress}
            disabled={disables}
        >
            <Text style={styles.modalContinueButtonText}>{name}</Text>
        </TouchableOpacity>
    );
};
