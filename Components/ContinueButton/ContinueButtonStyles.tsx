import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    modalContinueButton: {
        //backgroundColor: '#FA8A34',
        borderRadius: 15,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 15,
        width: '90%',
    },
    modalContinueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;

