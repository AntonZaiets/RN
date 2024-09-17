import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    nameBlock: {
      backgroundColor: '#FA8A34',
      display: 'flex',
      width: '100%',
      height: '25%',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderColor: '#FCAD71',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    styledText: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: '400',
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    name: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: '700',
    },
    testTask: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20,
    },
    image: {
        transform: [{ rotate: '180deg' }],
        display: 'flex',
    },
    goToCall: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 15,
        width: '50%'
    },
    beforeContainer: {
        width: '100%',
        marginTop: 20,
    },
    bank: {
        backgroundColor: '#636363',
        borderRadius: 15,
        padding: 15,
        width: '80%',
        marginLeft: '5%',
    },
    bankTop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bankBot: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 50,
    },
    wallet: {
        backgroundColor: '#EE6363',
        borderRadius: 15,
        padding: '5%',
        width: '80%',
        marginLeft: '5%',
    },
    posts: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    },

});

export default styles;

