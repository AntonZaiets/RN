import React, { useEffect, useState } from 'react';
import styles from "./SearchStyles";
import { FlatList, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavBar } from "../NavBar/NavBar";
import { useTranslation } from "react-i18next";
import { SearchSvg } from "../../Icons/SearchSvg";
import axios from "axios";

export const Search = () => {
    const {t} = useTranslation();
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);


    const fetchPosts = async () => {
        try {
            const results = [];
            for (let i = 1; i <= 10; i++) {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`);
                results.push(response.data);
            }
            return results;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    useEffect(() => {
        const loadData = async () => {
            const posts = await fetchPosts();
            setData(posts);
            setFilteredData(posts);
        };

        loadData();
    }, []);

    const handleSearch = (text) => {
        setSearchInput(text);


        if (text.trim()) {
            const filtered = data.filter(item =>
                item.title.toLowerCase().includes(text.toLowerCase()) ||
                item.id.toString().includes(text)
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };


    const renderItem = ({item}) => (
        <TouchableOpacity
            style={{
                padding: 10,
                backgroundColor: '#FFFFFF',
                marginVertical: 5,
                width: '100%',
                borderRadius: 15,
                alignSelf: 'center'
            }}
        >
            <Text style={{fontSize: 18, fontWeight: '500'}}>{t('search.id')} {item.id}</Text>
            <Text style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#414141',
                marginTop: 10
            }}>{t('search.name')} {item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{backgroundColor: '#F2F3F5', flex: 1}}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.searchHead}>{t('search.search')}</Text>
                    <TextInput
                        style={styles.search}
                        placeholder={t('search.search input')}
                        placeholderTextColor='#626975'
                        value={searchInput}
                        onChangeText={handleSearch}
                    />
                    <View style={styles.searchSvgBlock}>
                        <SearchSvg fill={'#626975'}/>
                    </View>
                </View>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1, paddingHorizontal: 16}}
                />
                <StatusBar barStyle={'dark-content'}/>
                <View style={styles.navBarContainer}>
                    <NavBar/>
                </View>
            </View>
        </SafeAreaView>
    );
};
