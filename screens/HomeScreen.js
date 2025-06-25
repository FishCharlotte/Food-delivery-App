import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Categories from '../components/categories'
import FeatureRow from '../components/featuredRow'
import { getFeaturedResturants } from '../api';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'
import { useDispatch } from 'react-redux';
import { emptyBasket } from '../slices/basketSlice';

export default function HomeScreen() {

    const [featuredCategories, setFeaturedCategories] = useState([])
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [selectedAddress, setSelectedAddress] = useState('City U');
    const displayAddressRaw = selectedAddress.startsWith('Current: ')
      ? selectedAddress.replace(/^Current: /, '')
      : selectedAddress;
    // 限制长度，超出部分以...结尾
    const maxAddressLength = 6;
    const displayAddress = displayAddressRaw.length > maxAddressLength
      ? displayAddressRaw.slice(0, maxAddressLength) + '...'
      : displayAddressRaw;

    useLayoutEffect(() => {
      navigation.setOptions({headerShown: false})
    }, [])

    useEffect(()=>{
        getFeaturedResturants().then(data=>{
            setFeaturedCategories(data);
        })
    },[]);

    useFocusEffect(
        React.useCallback(() => {
            dispatch(emptyBasket());
        }, [dispatch])
    );

    const handleAddressPress = () => {
      navigation.navigate('Address', {
        onSelect: (address) => setSelectedAddress(address)
      });
    };

  return (
    <SafeAreaView className="bg-white" >
    <StatusBar
        barStyle="dark-content"
    />
    {/* search bar */}
        <View className="flex-row items-center space-x-2 px-4 pb-2 mt-3">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                <TouchableOpacity onPress={handleAddressPress} className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height={20} width={20} stroke="gray" />
                    <Text className="text-gray-600">{displayAddress}</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full ml-2">
                <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                  <Icon.Clipboard height={20} width={20} strokeWidth="2.5" stroke="white" />
                </TouchableOpacity>
            </View>
        </View>

    {/* main */}
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 50
        }}
    >

        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
        {/*    TODO: 这里的筛选器是有问题的，你看看怎么新增这个有效筛选器功能，逻辑我都没想好     */}
        {
            featuredCategories?.map(category=>{
                return (
                        <FeatureRow
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            resturants={category?.restaurants}
                            description={category.description}
                            featuredCategory={category._type}
                        />
                )
            })
        }
        </View>




    </ScrollView>

    </SafeAreaView>
  )
}
