import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screen/HomeScreen";
import ProductDetailScreen from "./src/screen/ProductDetailScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={"HOME"} component={HomeScreen} />
    <Stack.Screen name={"PRODUCT_DETAILS"} component={ProductDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
};
export default App;