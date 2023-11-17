import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

export default function DetailsDisplay({ title, description, price }) {
  return (
    <View style={styles.container}>
      <BottomSheet
        snapPoints={[height - ITEM_HEIGHT, height]}
        initialSnapIndex={0}
      >
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
  },
});
