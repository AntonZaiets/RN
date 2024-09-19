import React, {useEffect, useState} from "react";
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import {useUser} from "../UserName/UserName";
import styles from "./HomeDashboardStyles";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import ListHeaderComponent from "./ListHeaderComponent";
import {NavBar} from "../NavBar/NavBar";



export const HomeDashboard = () => {
    const { user } = useUser(); // Отримай дані користувача
    const [data, setData] = useState([]);
    const navigation = useNavigation(); // Навігація для переходу між екранами

    const fetchPosts = async () => {
        const results = [];
        for (let i = 1; i <= 3; i++) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`);
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


    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ padding: 10, backgroundColor: '#FFFFFF', marginVertical: 5, width: '100%', borderRadius: 15, alignSelf: 'center'}}
            onPress={() => navigation.navigate('AboutPost', { title: item.title, body: item.body })}
        >
            <Text style={{fintSize: 18, fontWeight: '500'}}>{item.title}</Text>
            <Text style={{fintSize: 16, fontWeight: '400', color: '#414141', marginTop: 10}}>{item.body}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            <View style={{backgroundColor: '#F2F3F5', alignItems: 'center'}}>
                <View style={styles.nameBlock}>
                    <Text style={styles.styledText}>Your name</Text>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{user.firstName}</Text>
                        <Text style={styles.name}> {user.lastName}</Text>
                    </View>
                </View>
                <FlatList
                    ListHeaderComponent={ListHeaderComponent}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    vertical
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{height: 470, paddingHorizontal: 16}}
                />
                <NavBar />
            </View>
        </>
    );
}
