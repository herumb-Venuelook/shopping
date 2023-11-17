import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Animated,
} from "react-native";
import React, { useRef } from "react";


const { height, width } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const DOT_SIZE = 8;


const imgs = [
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0d9c64e-7c77-483f-8668-fa2d3e546fda/air-jordan-1-low-og-shoes-h08L0D.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/63274add-44d5-4639-a6ea-2b6700e4478f/air-jordan-1-low-og-shoes-h08L0D.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/47730f1f-bc6e-4c5f-bb4e-5fb60dcdaca7/air-jordan-1-low-og-shoes-h08L0D.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc1508f1-abd3-4688-92f3-ec1bafee0cfa/air-jordan-1-low-og-shoes-h08L0D.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc1508f1-abd3-4688-92f3-ec1bafee0cfa/air-jordan-1-low-og-shoes-h08L0D.png",
];

export default function ImgDisplay(props) {
  // const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ height: ITEM_HEIGHT}}>
      <Animated.FlatList
        data={imgs}
        // data={props.imgs}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        bounces={false}
        
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Image source={{uri : item}} style={styles.img} />
            </View>
          );
        }}
      />

      {/* FOR PAGINATION */}

      {/* <View style={styles.pagination}>
        {props.imgs.map((_, index) => {
          return <View key={index} style={styles.dot}></View>;
        })}
        <Animated.View style={[styles.dotIndicator,{
            transform:[{translateY:Animated.divide(scrollY,ITEM_HEIGHT).interpolate({
                inputRange : [0,1],
                outputRange : [0,DOT_SIZE*2]
            })}]
        }]}></Animated.View>
      </View> */}


    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
  },
  // pagination: {
  //   position: "absolute",
  //   top: ITEM_HEIGHT / 2,
  //   left: 20,
  // },
  // dot: {
  //   width: DOT_SIZE,
  //   height: DOT_SIZE,
  //   borderRadius: DOT_SIZE,
  //   marginBottom: DOT_SIZE,
  //   backgroundColor: "#333",
  // },
  // dotIndicator: {
  //   width: 2 * DOT_SIZE,
  //   height: 2 * DOT_SIZE,
  //   borderRadius: DOT_SIZE,
  //   borderWidth: 8,
  //   borderColor: "white",
  //   position: "absolute",
  //   top: -DOT_SIZE / 2,
  //   left: -DOT_SIZE / 2,
  // },
});
