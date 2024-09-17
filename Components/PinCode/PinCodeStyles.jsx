import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    pinCodeContainer: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 65,
        height: '100%',
        width: '100%',
    },
    pinCodeContainerTop: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50%',
        borderBottomColor: '#EBEFF5',
        borderBottomWidth: 1,
    },
    pinCodeContainerBot: {
        display: 'flex',
        alignItems: 'center'
    },
    pinCodeDot: {
      backgroundColor: '#BCBFC6',
      borderRadius: 50,
      width: 24,
      height: 24,
    },
    pinCodeDots: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        width: 184,
        justifyContent: 'space-around'
    },
    digits: {
        display: 'flex',
        flexDirection: 'column',
        height: '55%',
        width: '90%',
        alignItems: 'center',
        borderBottomColor: '#EBEFF5',
        borderBottomWidth: 1,
    },
    digitsRow: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'space-between'
    },
    digitStyle: {
        fontSize: 30,
        fontWeight: 700,
        display: 'flex',
        alignText: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 10,
    },
    buttonPressed: {
        //backgroundColor: 'red',
        borderRadius: '50%',
    },
    continueButton: {
      backgroundColor: 'red',
    },
    errorMessage: {
        color: '#D63C41',
        fontSize: 16,
        fontWeight: 500,
        marginTop: 20,
    },
});

export default styles;

