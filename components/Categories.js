import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/*Category Card*/}
      <CategoryCard
        imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
        title="Testing 1 " 
      />
      <CategoryCard
        imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
        title="Testing 2 "
      />
      <CategoryCard
        imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
        title="Testing 3 "
      />
      <CategoryCard
        imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
        title="Testing 3 "
      />
      <CategoryCard
        imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
        title="Testing 3 "
      />
      <CategoryCard
        imgUrl="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-10-twv-crispy-fall-tofu-bowl%2FTheKitchnFallTofuBowl_Option2"
        title="Testing 3 "
      />
    </ScrollView>
  );
};

export default Categories;
