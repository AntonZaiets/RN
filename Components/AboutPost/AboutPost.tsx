import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import styles from "./AboutPostStyles";
import { ArrowSvg } from "../../Icons/ArrowSvg";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import axios from "axios";
import ListHeaderComponent from "../AboutPost/ListHeaderComponent";
import { ContinueButton } from "../ContinueButton/ContinueButton";

// Define the parameter types for navigation
type RootStackParamList = {
    HomeDashboard: undefined;
    AboutPost: AboutPostParams; // Add AboutPost params
};

type AboutPostParams = {
    title: string;
    body: string;
};

// Specify the route type
type AboutPostRouteProp = RouteProp<RootStackParamList, 'AboutPost'>;

export const AboutPost = () => {
    const route = useRoute<AboutPostRouteProp>(); // Use the defined route type
    const { title, body } = route.params; // Now params will have correct types
    const navigation = useNavigation();
    const [data, setData] = useState<any[]>([]);

    const fetchPosts = async () => {
        const results = [];
        for (let i = 1; i <= 3; i++) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${i}`);
                results.push(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        return results;
    };

    useEffect(() => {
        const loadData = async () => {
            const posts = await fetchPosts();
            setData(posts);
        };

        loadData();
    }, []);

    const renderItem = ({ item }: { item: any }) => (
        <View style={{ padding: 10, backgroundColor: '#FFFFFF', marginVertical: 5, width: '100%', borderRadius: 15, alignSelf: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.name}</Text>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.email}</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#414141', marginTop: 10 }}>{item.body}</Text>
        </View>
    );

    return (
        <View style={{ backgroundColor: '#F2F3F5', alignItems: 'center' }}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ marginTop: '10%' }}
                    onPress={() => navigation.navigate('HomeDashboard' as never)}
                >
                    <ArrowSvg />
                </TouchableOpacity>
                <View style={styles.headerBot}>
                    <Text style={{ fontSize: 28, fontWeight: '700', marginBottom: '15%' }}>{title}</Text>
                    <Image source={require('../../Icons/recipe.png')} />
                </View>
            </View>
            <FlatList
                ListHeaderComponent={ListHeaderComponent}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ height: 250, paddingHorizontal: 16 }}
            />
            <View style={styles.backButton}>
                <ContinueButton disables={false} bgColor={'#FA8A34'} name={'Back'} onPress={() => navigation.navigate('HomeDashboard' as never)} />
            </View>
        </View>
    );
};
