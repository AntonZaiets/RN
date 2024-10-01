import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./HomeDashboardStyles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ListHeaderComponent from "./ListHeaderComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import {posts} from "../Services/api/post";


type HomeDashboardProps = {
    title: string;
    body: string;
};

type RootStackParamList = {
    HomeDashboard: undefined;
    AboutPost: { title: string; body: string }; // Define AboutPost parameters
};

export const HomeDashboard = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<any[]>([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Specify the type of the navigation prop
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const fetchPosts = async () => {
        const response = await posts();
        const results = [];
        for (let i = 1; i <= 3; i++) {
            results.push(response[i])
        }
        return results;
    };

    useEffect(() => {
        getUserData();
        const loadData = async () => {
            const posts = await fetchPosts();
            setData(posts);
        };
        loadData();
    }, []);

    const getUserData = async () => {
        try {
            const storedFirstName = await AsyncStorage.getItem('userFirstName');
            const storedLastName = await AsyncStorage.getItem('userLastName');
            setFirstName(storedFirstName || '');
            setLastName(storedLastName || '');
        } catch (error) {
            console.error('Error retrieving login data:', error);
        }
    };

    const renderItem = ({ item }: { item: HomeDashboardProps }) => (
        <TouchableOpacity
            style={{ padding: 10, backgroundColor: '#FFFFFF', marginVertical: 5, width: '100%', borderRadius: 15, alignSelf: 'center' }}
            onPress={() => navigation.navigate('AboutPost', { title: item.title, body: item.body })}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#414141', marginTop: 10 }}>{item.body}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ backgroundColor: '#F2F3F5', alignItems: 'center' }}>
            <View style={styles.nameBlock}>
                <Text style={styles.styledText}>{t('homeDashboard.your name')}</Text>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{firstName} {lastName}</Text>
                </View>
            </View>
            <FlatList
                ListHeaderComponent={ListHeaderComponent}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ height: 470, paddingHorizontal: 16 }}
            />
            {/*<NavBar />*/}
        </View>
    );
};
