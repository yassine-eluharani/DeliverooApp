import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";
import SanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurant] = useState([]);
  useEffect(() => {
    SanityClient.fetch(
      `
      *[_type == "featured" && _id==$id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name,
          }
        },
      }[0]
      `,
      { id }
    ).then((data) => {
      setRestaurant(data?.restaurants);
    });
  }, [id]);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00BBCC" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCards
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.lat}
            lat={restaurant.long}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
