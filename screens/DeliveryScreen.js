import { View, Text, StatusBar, TouchableOpacity, Image, Platform, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../slices/restaurantSlice';
import MapView, {Marker} from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { emptyBasket } from '../slices/basketSlice';

// TODO: 联动历史订单OrderScreen组件，存储当前组件
// - 如果当前订单是没有取消的，则在OrderScreen中新增一条数据
// - 如果当前订单是取消的，则在OrderScreen中不新增数据
//   - 如果已经新增，则删除该行记录
//   - 如果没有新增，则不做任何操作
export default function DeliveryScreen() {
    const navigation = useNavigation();
    const resturant = useSelector(selectResturant);
    const dispatch = useDispatch();
    const handleCancel = () => {
      Alert.alert(
        'Cancel Order',
        'Are you sure you want to cancel this order?',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              dispatch(emptyBasket());
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Home' }],
                })
              );
            },
            style: 'destructive',
          },
        ],
        { cancelable: true }
      );
    }

    // 通话按钮点击逻辑
    const handleCall = () => {
      Alert.alert(
        'Contact Rider',
        'Do you want to call 8888888 to contact the rider?',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              Alert.alert(
                'Call Successful',
                'You have called the rider. Please urge them to deliver your order as soon as possible!'
              );
            },
          },
        ],
        { cancelable: true }
      );
    }

    // 返回首页的统一逻辑
    const handleBack = () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      );
    }

    // TODO: 监听手势返回
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('gestureEnd', (e) => {
            handleBack();
        });
        return unsubscribe;
    }, [navigation]);

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} edges={['top']}>
          <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
          {/* 返回按钮 */}
          <TouchableOpacity
              onPress={handleBack}
              style={{ position: 'absolute', top: 70, left: 16, zIndex: 10, backgroundColor: 'white', borderRadius: 20, padding: 6, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}
          >
              <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} width={24} height={24} />
          </TouchableOpacity>
          <MapView
              region={{
                  latitude: 22.3375,
                  longitude: 114.1736,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
              }}
              className="flex-1"
              mapType="standard"
              style={{ flex: 1 }}
          >
            <Marker
                coordinate={{
                    latitude: 22.3375,
                    longitude: 114.1736
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
                  {/* 通话按钮绑定事件 */}
                  <TouchableOpacity onPress={handleCall} className="bg-white p-2 rounded-full mr-3">
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
