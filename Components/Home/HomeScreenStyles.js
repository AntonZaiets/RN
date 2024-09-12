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
        marginTop: '15%',
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
    imageLeftRight: {
        display: 'flex',
        position: 'absolute',
        zIndex: -3,
        left: '100%',
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
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    svgContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        width: 110,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftIcon: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
    centerIcon: {
        zIndex: 2,
    },
    rightIcon: {
        position: 'absolute',
        right: 0,
        zIndex: 1,
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
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalContent: {
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        //padding: 15,
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        //paddingHorizontal: 20,
        paddingVertical: 30,
    },
    modalClose: {
        display: 'flex',
        zIndex: 10,
        position: 'absolute',
        top: '-10%',
        alignSelf: 'flex-start',
        paddingLeft: 15,
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomColor: '#EBEFF5',
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 20,
    },
    modalImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    modalHeaderText: {
        justifyContent: 'center',
        marginLeft: 20,
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
        paddingHorizontal: 10,
    },
    modalInputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    modalTextInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        padding: 10,
        fontSize: 16,
    },
    passwordToggle: {
        position: 'absolute',
        right: 20,
        top: 35,
    },
    /*modalContinueButton: {
        backgroundColor: '#FA8A34',
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 15,
    },
    modalContinueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },*/
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
    errorLabelTop: {
        position: "absolute",
        right: 15,
        top: 75,
    },
    errorLabelBot: {
        position: "absolute",
        right: 15,
        top: 35,
    },
    errorMessage: {
        color: '#D63C41',
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 20,
    },
});

export default styles;

