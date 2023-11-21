import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  SectionList,
} from "react-native";
import React from "react";
import Data from "../../data/Data";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomePage({navigation}) {
  const products = Data;
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        padding: 0,
      }}
    >
      <View>
        <Text style={styles.heading}>Non-Veg</Text>
      </View>
      <ScrollView
        style={{ marginBottom: 10, marginHorizontal: "4%", flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "grey",
              // marginLeft: 10,
              // marginTop: 20,
            }}
          >
            All shoes
          </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("AllShoes")}} style={{backgroundColor:'black',height : 40,width:100,alignItems:'center',justifyContent:'center'}} >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                color:'white',
                // marginLeft: 10,
                // marginTop: 20,
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate("Product")} style={styles.prodCont}>
                <Image style={styles.prodImg} source={item.imgs[0]} />
                <Text style={styles.prodTitle}>{item.title}</Text>
                <Text style={styles.prodPrice}>{item.price}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text style={{ marginTop: 40 }}>
          Lorem Lorem voluptate nisi nisi aliqua ea amet incididunt cillum
          laborum mollit id. Duis est consequat commodo commodo laboris
          excepteur laborum non. Occaecat ut enim aliqua Lorem cupidatat
          pariatur. Anim eu mollit aute proident duis qui incididunt elit. Irure
          duis mollit esse voluptate velit dolor nulla nulla nostrud sint
          officia nostrud proident. Officia elit consequat et consequat
          consequat Lorem proident qui minim nostrud commodo in. Proident
          voluptate ex esse laborum.
        </Text>
        <Text>T&C</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginBottom: 10,
    // marginHorizontal: 5,
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
    marginVertical: 25,
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
