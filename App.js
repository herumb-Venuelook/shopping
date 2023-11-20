import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AllProducts from "./src/components/AllProducts";
import HomePage from "./src/components/HomePage";

export default function App() {
  
  return (
    <GestureHandlerRootView>
      <View>
        <StatusBar hidden />
        <AllProducts/>
        {/* <HomePage/> */}
      </View>
    </GestureHandlerRootView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
