import { View, Text, StatusBar, TouchableOpacity, Image, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../slices/resturantSlice';
import MapView, {Marker} from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { emptyBasket } from '../slices/basketSlice';


export default function DeliveryScreen() {
    const navigation = useNavigation();
    const resturant = useSelector(selectResturant);
    const dispatch = useDispatch();
    const handleCancel = ()=>{
      dispatch(emptyBasket());
      navigation.navigate('Home')
    }
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} edges={['top']}>
          <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
          <MapView
              region={{ // 使用 region 替代 initialRegion
                  latitude: resturant.lat,
                  longitude: resturant.lng,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
              }}
              className="flex-1"
              mapType="standard"
              style={{ flex: 1 }}
          >
            <Marker
                coordinate={{
                    latitude: resturant.lat,
                    longitude: resturant.lng
                }}
                title={resturant.title}
                description={resturant.description}
                pinColor={themeColors.bgColor(1)}
            />
        </MapView>

          <View className="rounded-t-3xl -mt-12 bg-white relative">
              <View className="flex-row justify-between px-5 pt-10">
                  <View>
                      <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
                      <Text className="text-3xl font-extrabold text-gray-700">20-30 Minutes</Text>
                      <Text className="mt-2 text-gray-700 font-semibold">Your Order is on its way</Text>
                  </View>
                  <Image className="h-24 w-24" source={require('../assets/images/bikeGuy2.gif')} />
              </View>

              {/* 骑手信息栏（橙色背景） */}
              <View style={{ backgroundColor: themeColors.bgColor(0.8) }} className="p-2 flex-row items-center rounded-full my-5 mx-2">
                  <View className="p-1 rounded-full bg-white bg-opacity-40">
                      <Image className="w-16 h-16 rounded-full" source={require('../assets/images/deliveryGuy.jpg')} />
                  </View>
                  <View className="ml-3 flex-1">
                      <Text className="text-lg font-bold text-white">EC6001 Group</Text>
                      <Text className="text-white font-semibold">Your Rider</Text>
                  </View>
                  <TouchableOpacity className="bg-white p-2 rounded-full mr-3">
                      <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth="1" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCancel} className="bg-white p-2 rounded-full">
                      <Icon.X stroke="red" strokeWidth="5" />
                  </TouchableOpacity>
              </View>
          </View>
      </SafeAreaView>
  )
}
