import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductPage from "./src/components/ProductPage";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const product = {
    title: "Air Jordan 1 Low OG",
    description:
      "The Air Jordan 1 Low OG remakes the classic sneaker with new colors and textures. Premium materials and accents give fresh expression to an all-time favorite. \n\nShown: Black/Tech Grey/White/Muslin \nStyle: CZ0790-001",
    price: "Rs. 8450.00",
  };
  return (
    <GestureHandlerRootView>
      <View>
        <StatusBar hidden />
        <ProductPage />
      </View>
    </GestureHandlerRootView>
    // {/* <BottomSheetModalProvider> */}
    // {/* </BottomSheetModalProvider> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
