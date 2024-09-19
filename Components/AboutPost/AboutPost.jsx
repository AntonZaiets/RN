import React, {useEffect, useState} from 'react'
import {Image, TouchableOpacity, View, Text, FlatList} from "react-native";
import styles from "./AboutPostStyles";
import {ArrowSvg} from "../../Icons/ArrowSvg";
import {useNavigation, useRoute} from "@react-navigation/native";
import axios from "axios";
import ListHeaderComponent from "../AboutPost/ListHeaderComponent";
import {ContinueButton} from "../ContinueButton/ContinueButton";


export const AboutPost = () => {
    const route = useRoute(); // Отримуємо передані параметри з навігації
    const { title, body } = route.params; // Доступ до переданих параметрів
    const navigation = useNavigation();
    const [data, setData] = useState([]);

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


    const renderItem = ({ item }) => (
        <View style={{ padding: 10, backgroundColor: '#FFFFFF', marginVertical: 5, width: '100%', borderRadius: 15, alignSelf: 'center'}}>
            <Text style={{fintSize: 18, fontWeight: '500'}}>{item.name}</Text>
            <Text style={{fintSize: 18, fontWeight: '500'}}>{item.email}</Text>
            <Text style={{fintSize: 16, fontWeight: '400', color: '#414141', marginTop: 10}}>{item.body}</Text>
        </View>
    );

    return(
        /*<View>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{marginTop: '10%'}}
                    onPress={() => {navigation.navigate('HomeDashboard')}}
                >
                    <ArrowSvg />
                </TouchableOpacity>
                <View style={styles.headerBot}>
                    <Text style={{fontSize: 28, fontWeight: '700', marginBottom: '15%'}}>{title}</Text>
                    <Image style={{}} source={require('../../Icons/recipe.png')}/>
                </View>
            </View>
            <View style={styles.aboutPost}>
                <Text style={{fontSize: 15, fontWeight: '400', color: '#606773'}}>About</Text>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 15, padding: 20, marginTop: 10}}>
                    <Text>{body}</Text>
                </View>
            </View>
            <View style={styles.postComments}>
                <Text style={{fontSize: 15, fontWeight: '400', color: '#606773'}}>Comments</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    vertical
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 5, display: 'flex' }}
                />
            </View>
        </View>*/
        <>
            <View style={{backgroundColor: '#F2F3F5', alignItems: 'center'}}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={{marginTop: '10%'}}
                        onPress={() => {navigation.navigate('HomeDashboard')}}
                    >
                        <ArrowSvg />
                    </TouchableOpacity>
                    <View style={styles.headerBot}>
                        <Text style={{fontSize: 28, fontWeight: '700', marginBottom: '15%'}}>{title}</Text>
                        <Image style={{}} source={require('../../Icons/recipe.png')}/>
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
                    style={{height: 250, paddingHorizontal: 16}}
                />
                <View style={styles.backButton}>
                    <ContinueButton style={{marginBottom: 0, height: 50}} bgColor={'#FA8A34'} name={'Back'} onPress={() => {navigation.navigate('HomeDashboard')}}/>
                </View>
            </View>
        </>
    )
}