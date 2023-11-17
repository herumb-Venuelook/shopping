import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import BottomSheet from "@gorhom/bottom-sheet";


const {height,width} = Dimensions.get('screen')
export default function BottomCheck({title,description,price}) {
  return (
    <View style={styles.container}>
      <BottomSheet snapPoints={["20%", "50%", "100%"]}>
        <View>
        <Text style={{ fontSize: 32, fontWeight: "bold", margin: 5 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", margin: 5 }}>
            {price}
          </Text>
          <Text style={{ margin: 5 }}>{description}</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginHorizontal : 0,
    backgroundColor : 'grey',
    width : width
  },
});
