import React, {useState} from "react";
import {View, Modal, TouchableOpacity} from "react-native";

export const SignUpModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const transparent = 'rgba(0, 0, 0, 0.5)';
    function renderModal() {
        return(
            <Modal
                visible={openModal}
                animationType='slide'
                transparent={true}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: transparent
                    }}>

                </View>
            </Modal>
        );
    }
    return(
        <View>

        </View>
    );
}
