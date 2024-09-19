import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        display: 'flex',
        flexDirection: 'column',
        height: 500,
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
        width: '100%',
        alignSelf: 'center',
    },
    postComments: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,

    },
    backButton: {
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 90,
        paddingBottom: 20,
        //paddingTop: 5,
        borderTopColor: '#E6EBF5',
        borderTopWidth: 1
    }
});

export default styles;

