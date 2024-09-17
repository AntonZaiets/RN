import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        display: 'flex',
        flexDirection: 'column',
        height: '45%',
        justifyContent: 'space-between',
        padding: 20
    },
    headerBot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    aboutPost: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    postComments: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,

    }
});

export default styles;

