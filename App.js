import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AllProducts from "./src/components/AllProducts";
import HomePage from "./src/components/HomePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductPage from "./src/components/ProductPage";
import SingleProduct from "./src/components/SingleProduct";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); //Hide warnings
LogBox.ignoreAllLogs();

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex:1}}>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="AllShoes" component={AllProducts} />
          <Stack.Screen name="Product" component={ProductPage}/>
          <Stack.Screen name = "Prod" component={SingleProduct} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

