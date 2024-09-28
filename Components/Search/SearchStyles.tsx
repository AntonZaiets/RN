import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F3F5',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    top: {
        paddingHorizontal: 16,
    },
    searchHead: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 15,
    },
    search: {
        backgroundColor: '#F2F3F5',
        borderWidth: 1,
        borderColor: '#CED5E0',
        borderRadius: 15,
        fontSize: 15,
        paddingVertical: 15,
        color: '#626975',
        paddingLeft: 40,

    },
    searchSvgBlock: {
        position: 'absolute',
        top: 73,
        left: 25,
    },
    navBarContainer: {
        position: 'absolute',
        bottom: -50,
        left: 0,
        right: 0,
    },
});

export default styles;

