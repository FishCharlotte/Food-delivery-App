import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';

// 假数据
const orders = [
  {
    id: '1',
    restaurant: 'CityU Canteen',
    foods: ['Fried Rice', 'Chicken Wings'],
    time: '2024-05-01 12:30',
    price: 56,
  },
  {
    id: '2',
    restaurant: 'Pizza Hut',
    foods: ['Pepperoni Pizza', 'Coke'],
    time: '2024-05-02 18:10',
    price: 88,
  },
];

export default function OrderScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* 右上角关闭按钮 */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: 15, right: 20, zIndex: 10, backgroundColor: 'white', borderRadius: 20, padding: 6, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}
      >
        <Icon.X stroke="black" strokeWidth={3} width={24} height={24} />
      </TouchableOpacity>
      <Text style={{ fontSize: 28, fontWeight: 'bold', margin: 20, textAlign: 'center' }}>Order History</Text>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#f5f5f5', marginHorizontal: 16, marginBottom: 16, borderRadius: 16, padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Restaurant: {item.restaurant}</Text>
            <Text style={{ marginTop: 4 }}>Foods: {item.foods.join(', ')}</Text>
            <Text style={{ marginTop: 4 }}>Time: {item.time}</Text>
            <Text style={{ marginTop: 4, color: '#e67e22', fontWeight: 'bold' }}>Price: ${item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
} 