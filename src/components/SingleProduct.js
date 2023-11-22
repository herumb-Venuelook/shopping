import {
    View,
    Text,
    FlatList,
    Dimensions,
    Image,
    StyleSheet,
    SafeAreaView,
    Button,
  } from "react-native";
  import React, { useState } from "react";
  import { AntDesign } from "@expo/vector-icons";
  import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const sizes = [
  { uk: "5", selected: false },
  { uk: "6", selected: false },
  { uk: "7", selected: false },
  { uk: "8", selected: false },
  { uk: "9", selected: false },
  { uk: "10", selected: false },
  { uk: "11", selected: false },
  { uk: "12", selected: false },
];
export default function SingleProduct({route,navigation}) {
    const {title,price,description,imgs} = route.params
    const [selectedSize, setSelectSize] = useState("");
    const [shoeSize, setShoeSize] = useState(sizes);
  
    const handleSizeClick = (s) => {
      setSelectSize(s);
      setShoeSize(
        shoeSize.map((item) =>
          item.uk === s
            ? { ...item, uk: s, selected: true }
            : { ...item, uk: item.uk, selected: false }
        )
      );
    };
  
    return (
      <View style={{ height: height }}>
        <View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
          <Ionicons
            onPress={() => navigation.navigate("Home")}
            style={{
              position: "absolute",
              left: 0.07 * width,
              top: 0.07 * height,
              zIndex: 1,
            }}
            name="chevron-back"
            size={24}
            color="black"
          />
          <FlatList
            data={imgs}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image source={item} style={styles.img} />
                </View>
              );
            }}
          />
        </View>
        <BottomSheet
          style={{ flex: 1, width: width }}
          initalSnapIndex={0}
          snapPoints={[height - ITEM_HEIGHT, height]}
        >
          <BottomSheetScrollView>
            <View style={{ marginHorizontal: 15, marginTop: 30, gap: 10 }}>
              <Text style={{ fontSize: 32, fontWeight: "bold", margin: 5 }}>
                {title}
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", margin: 5 }}>
                {price}
              </Text>
              <Text style={{ margin: 5 }}>{description}</Text>
              <Text style={{ fontWeight: "600", marginLeft: 15, marginTop: 25 }}>
                Select size
              </Text>
              <SafeAreaView style={{ alignItems: "center", marginTop: 20 }}>
                <FlatList
                  data={shoeSize}
                  numColumns={2}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={{
                          width: width / 3,
                          height: 40,
                          backgroundColor: item.selected ? "#ADADAD" : "black",
                          alignItems: "center",
                          justifyContent: "center",
                          marginHorizontal: 25,
                          marginVertical: 10,
                        }}
                        onPress={() => handleSizeClick(item.uk)}
                      >
                        <Text
                          style={{ color: item.selected ? "black" : "white" }}
                        >
                          {item.uk}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </SafeAreaView>
            </View>
  
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderWidth: 3,
                  borderColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25,
                  height: 80,
                  width: width * 0.7,
                  margin: 20,
                }}
              >
                <Text>Add to Bag</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderWidth: 3,
                  borderColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25,
                  height: 80,
                  width: width * 0.7,
                  margin: 20,
                }}
              >
                <Text>
                  Favourite <AntDesign name="hearto" size={14} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    );
}

const styles = StyleSheet.create({
    img: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      resizeMode: "cover",
    },
  });