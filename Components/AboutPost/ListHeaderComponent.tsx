import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import styles from "./AboutPostStyles";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";

type RouteParams = {
    AboutPost: {
        body: string;
    };
};

const ListHeaderComponent = () => {
    const route = useRoute<RouteProp<RouteParams, 'AboutPost'>>();
    const { body } = route.params; // Доступ до переданих параметрів

    return(
        <SafeAreaView>
            <View style={styles.aboutPost}>
                <Text style={{fontSize: 15, fontWeight: '400', color: '#606773'}}>About</Text>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 15, padding: 20, marginTop: 10}}>
                    <Text>{body}</Text>
                </View>
            </View>
            <Text style={{marginTop: 20, marginBottom: 5}}>Comments</Text>
        </SafeAreaView>
    )
}

export default ListHeaderComponent;