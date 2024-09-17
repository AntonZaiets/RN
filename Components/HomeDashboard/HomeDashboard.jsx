import React, {useEffect, useState} from "react";
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity} from "react-native";
import {useUser} from "../UserName/UserName";
import styles from "./HomeDashboardStyles";
import {ArrowGreenSvg} from "../../Icons/ArrowGreenSvg";
import {LinkWhiteSvg} from "../../Icons/LinkWhiteSvg";
import {ArrowLeftSvg} from "../../Icons/ArrowLeftSvg";
import {LinkGreenSvg} from "../../Icons/LinkGreenSvg";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";



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
        <View style={{backgroundColor: '#F2F3F5', alignItems: 'center'}}>
            <View style={styles.nameBlock}>
                <Text style={styles.styledText}>Your name</Text>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{user.firstName}</Text>
                    <Text style={styles.name}> {user.lastName}</Text>
                </View>
            </View>
            <View style={styles.testTask}>
                <View style={styles.leftSide}>
                    <View>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Test task</Text>
                        <Text style={{fontSize: 13, fontWeight: '400', color: '#858C94'}}>Lorem ipsum</Text>
                    </View>
                    <View style={styles.goToCall}>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#009E81'}}>Go to call</Text>
                        <View style={styles.image}>
                            <ArrowGreenSvg/>
                        </View>
                    </View>
                </View>
                <View>
                    <Image source={require('../../Icons/TestTask.png')}/>
                </View>
            </View>
            <View style={styles.beforeContainer}>
                <Text style={{fontSize: 15, fontWeight: '400', color: '#606773', marginLeft: '5%',}}>Before you Start</Text>
                <ScrollView
                    scrollEventThrottle={16}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{marginTop: 10}}
                >
                    <View style={styles.bank}>
                        <View style={styles.bankTop}>
                            <View style={{marginRight: 15}}>
                                <LinkWhiteSvg />
                            </View>
                            <View>
                                <Text style={{fontSize: 15, fontWeight: '500', color: '#FFFFFF'}}>Link your Bank{'\n'}Account</Text>
                            </View>
                        </View>
                        <View style={styles.bankBot}>
                            <View>
                                <Text style={{fontSize: 15, fontWeight: '500', color: '#FFFFFF'}}>2 steps</Text>
                            </View>
                            <View>
                                <ArrowLeftSvg />
                            </View>
                        </View>
                    </View>
                    <View style={styles.wallet}>
                        <View style={styles.bankTop}>
                            <View style={{marginRight: 15}}>
                                <LinkGreenSvg />
                            </View>
                            <View>
                                <Text style={{fontSize: 15, fontWeight: '500', color: '#06070A'}}>Link your Wallet{'\n'}Account</Text>
                            </View>
                        </View>
                        <View style={styles.bankBot}>
                            <View>
                                <Text style={{fontSize: 15, fontWeight: '500', color: '#158FAA'}}>3 steps</Text>
                            </View>
                            <View>
                                <ArrowLeftSvg />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.posts}>
                    <Text style={{fontSize: 15, fontWeight: '400', color: '#606773'}}>Posts</Text>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        vertical
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 5, display: 'flex' }}
                    />
                </View>
            </View>
        </View>
    );
}
