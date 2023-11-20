import { View, Text, FlatList } from "react-native";
import React from "react";
import Data from "../../data/Data";
import ProductPage from "./ProductPage";
import { PanGestureHandler } from "react-native-gesture-handler";

export default function AllProducts() {
  const products = Data;
  console.log(products)
  return (
    <PanGestureHandler>
      <View>
        <FlatList
          data={products}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ProductPage
                title={item.title}
                description={item.description}
                price={item.price}
                imgs={item.imgs}
              />
            );
          }}
        />
      </View>
    </PanGestureHandler>
  );
}
