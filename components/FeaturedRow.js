import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({id, title , description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00BBCC"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCards
            id={123}
            imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
            title="Yo! sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St "
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
        ></RestaurantCards>
        <RestaurantCards
            id={123}
            imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
            title="Yo! sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St "
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
        ></RestaurantCards>
        <RestaurantCards
            id={123}
            imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
            title="Yo! sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St "
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
        ></RestaurantCards>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow