import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    top: {
      paddingHorizontal: 16,
    },
    settingsHead: {
      fontSize: 22,
      fontWeight: '600',
      marginTop: 20,
      marginBottom: 15,
    },
    title: {
      fontSize: 15,
      fontWeight: '500',
      marginLeft: 10
    },
    basicOtherHead: {
      fontSize: 15,
      fontWeight: '400',
      color: '#606773',
        marginTop: 20,
        marginBottom: 10,
    },
    blocks: {
        borderRadius: 15,
        borderColor: '#CED5E0',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    grayCircle: {
      backgroundColor: '#EBEFF5',
      borderRadius: 20,
      width: 32,
      height: 32.
    },
});

export default styles;

