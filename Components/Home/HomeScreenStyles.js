import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F2F3F5',
    },
    direction: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    LeftSide: {
        alignItems: 'center',
    },
    RightSide: {
        marginTop: 40,
    },
    Block: {
        width: 150,
        height: 150,
        backgroundColor: '#FA8A34',
        borderRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '30%',
        height: '30%',
    },
    imageText: {
        marginTop: 10,
    },
    imageBg: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 150,
        height: 150,
        alignItems: 'center',
        margin: 20,
        justifyContent: 'center',
    },
    svgContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    buttonContainer: {
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
    },
    SignInButton: {
        padding: 20,
        borderRadius: 20,
        marginRight: 10,
    },
    SignUpButton: {
        backgroundColor: '#FA8A34',
        padding: 20,
        borderRadius: 20,
    },
    SignInButtonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    SignUpButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        padding: 15,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    modalCloseText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    modalHeaderText: {
        justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    modalSubtitle: {
        fontSize: 16,
        color: '#777',
    },
    modalInputContainer: {
        marginBottom: 15,
    },
    modalInputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    modalTextInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    passwordToggle: {
        position: 'absolute',
        right: 10,
        top: 40,
    },
    modalContinueButton: {
        backgroundColor: '#FA8A34',
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    modalContinueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalCreateAccountButton: {
        marginTop: 15,
        alignItems: 'center',
    },
    modalCreateAccountButtonText: {
        color: '#FA8A34',
        fontSize: 14,
        fontWeight: 'bold',
    },
    bg: {
        position: 'absolute',
        bottom: 0,
    },
});

export default styles;

