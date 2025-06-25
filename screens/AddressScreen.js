import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import * as Location from 'expo-location';

const defaultAddresses = [
  { id: '1', label: 'City U' },
  { id: '2', label: 'CityU Hall' },
  { id: '3', label: 'Festival Walk' },
];

export default function AddressScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [addresses, setAddresses] = useState(defaultAddresses);
  const [loading, setLoading] = useState(false);

  const handleSelect = (address) => {
    // 返回并传递所选地址
    if (route.params && route.params.onSelect) {
      route.params.onSelect(address);
    }
    navigation.goBack();
  };

  const handleAddCurrentLocation = async () => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLoading(false);
        alert('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let geocode = await Location.reverseGeocodeAsync(location.coords);
      let addressLabel = `${geocode[0]?.name || ''} ${geocode[0]?.street || ''} ${geocode[0]?.city || ''}`.trim();
      setAddresses([{ id: Date.now().toString(), label: `Current: ${addressLabel}` }, ...addresses]);
    } catch (e) {
      alert('Failed to get current location');
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* 右上角关闭按钮 */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: 15, right: 20, zIndex: 10, backgroundColor: 'white', borderRadius: 20, padding: 6, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}
      >
        <Icon.X stroke="black" strokeWidth={3} width={24} height={24} />
      </TouchableOpacity>
      <Text style={{ fontSize: 28, fontWeight: 'bold', margin: 20, textAlign: 'center' }}>Select Address</Text>
      <TouchableOpacity
        onPress={handleAddCurrentLocation}
        style={{ backgroundColor: '#e0f7fa', marginHorizontal: 16, marginBottom: 16, borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        disabled={loading}
      >
        <Icon.MapPin stroke="#00796b" strokeWidth={2.5} width={22} height={22} />
        <Text style={{ fontSize: 16, color: '#00796b', fontWeight: 'bold', marginLeft: 8 }}>
          {loading ? 'Locating...' : 'Add Current Location'}
        </Text>
        {loading && <ActivityIndicator size="small" color="#00796b" style={{ marginLeft: 8 }} />}
      </TouchableOpacity>
      <FlatList
        data={addresses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelect(item.label)}
            style={{ backgroundColor: '#f5f5f5', marginHorizontal: 16, marginBottom: 16, borderRadius: 16, padding: 16 }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
