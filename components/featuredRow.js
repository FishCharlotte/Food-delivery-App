import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './resturantCard'
import { getFeaturedResturantById } from '../api'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'

export default function FeatureRow({id, title, description, resturants}) {

  // const [resturants, setResturants] = useState([]);

  useEffect(() => {
    getFeaturedResturantById(id).then(data=>{
      // console.log('got data: ',data);
      setResturants(data?.resturants);
    })
  }, [id])
  console.log(resturants);

  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>

        <TouchableOpacity>
          {/*  TODO: 这个按钮可以做成真实可选择的，现在只是一个空壳，可以数据多的时候就渲染对应类型的数据，用modal或者full screen弹出    */}
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>



      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {
          resturants.map(resturant=>{

            return (
                <ResturantCard
                  key={resturant._id}
                  id={resturant._id}
                  imgUrl={resturant?.image}
                  title={resturant.name}
                  rating={resturant.rating}
                  type={resturant.type?.name}
                  address="又一城 商場"
                  description={resturant.description}
                  dishes={resturant.dishes}
                  lng={114.1736}
                  lat={22.3375}
              {/*    TODO: 考虑一下这里的内容能不能优化一下    */}
              />
            )
          })
        }
       </ScrollView>

    </View>
  )
}
