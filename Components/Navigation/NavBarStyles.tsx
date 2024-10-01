import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    navBar: {
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 90,
        paddingTop: 5,
        borderTopColor: '#E6EBF5',
        borderTopWidth: 1
    },
    tabs: {
        display: 'flex',
        alignItems: 'center'
    }
});

export default styles;

