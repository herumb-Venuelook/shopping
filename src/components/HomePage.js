import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import Data from "../../data/Data";

export default function HomePage() {
  const products = Data;
  return (
    <View>
      <Text style={styles.heading}>Non-Veg</Text>
      <View>
        <Text>All shoes</Text>
        <FlatList
          scrollEnabled
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={styles.prodCont}>
                <Image style={styles.prodImg} source={item.imgs[0]} />
                <Text style={styles.prodTitle}>{item.title}</Text>
                <Text style={styles.prodPrice}>{item.price}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    overflow: "scroll",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginHorizontal: 5,
    backgroundColor: "black",
  },
  heading: {
    fontSize: 30,
    color: "#fff",
    textAlign: "left",
    fontWeight: "600",
    backgroundColor: "black",
    paddingTop: "20%",
    paddingLeft: "10%",
    paddingBottom: "5%",
  },
  prodCont: {
    height: 250,
    width: 200,
    padding: 10,
    marginVertical: 15,
    paddingVertical: 5,
  },
  prodImg: {
    height: "90%",
    width: "90%",
  },
  prodTitle: {
    fontWeight: "bold",
  },
  prodPrice: {
    fontWeight: "500",
    position: "absolute",
    bottom: -24,
    left: 15,
  },
});
