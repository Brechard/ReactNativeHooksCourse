import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext"; // This is inside brackets becasue we don't use the 'default' in export
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ title: "Blogs" }}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: route.params.id })}>
              <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer theme={MyTheme}>
        <MyStack />
      </NavigationContainer>
    </BlogProvider>
  );
}
