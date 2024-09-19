import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    header: {
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FA8A34',
      borderRadius: 28,
    },
    container: {
      backgroundColor: '#F2F3F5',
      padding: 16,
    },
    testContainer: {
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      width: '100%',
      height: 144,
    },
    testTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    startContainer: {
      width: 250,
      height: 150,
      backgroundColor: '#636363',
      borderRadius: 16,
      padding: 16,
      marginTop: 15,
      marginRight: 20,
    },
    addContainer: {
      width: 250,
      height: 150,
      backgroundColor: '#EE6363',
      borderRadius: 16,
      padding: 16,
      marginTop: 15,
    },
    headerContainer: {
      borderRadius: 16,
      marginTop: 15,
      flexDirection: 'row',
    },
    childrenContainer: {
      borderRadius: 16,
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    startText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 500,
      flexShrink: 1,
      margin: 8,
    },
    addText: {
      color: '#06070A',
      fontSize: 15,
      fontWeight: 500,
      flexShrink: 1,
      margin: 8,
    },
    testHeaderText: {
      color: '#06070A',
      fontSize: 15,
      fontWeight: 500,
    },
    arrowIcon: {
      top: 5,
    },
    postContainer: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 16,
      marginTop: 5,
      margin: 16,
    },
    childPostText: {
      fontWeight: 400,
      fontSize: 13,
      color: '#606773',
      paddingBottom: 5,
    },
    textPost: {
      fontSize: 15,
      fontWeight: 400,
      color: '#606773',
      marginTop: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
    },
    childText: {
      fontWeight: 400,
      fontSize: 13,
      color: '#fff',
      paddingBottom: 5,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    steps: {
      color: '#606773',
      fontWeight: 500,
      fontSize: 15,
      margin: 8,
    },
    flatListContainer: {
      margin: 5,
      flex: 1,
      padding: 16,
      marginBottom: -30,
      top: -15,
    },
    taskText: {
      fontSize: 15,
      fontWeight: 500,
      color: '#009E81',
      paddingTop: 40,
    },
    dropDownIcon: {
      top: 20,
      marginLeft: 40,
    },
  });
