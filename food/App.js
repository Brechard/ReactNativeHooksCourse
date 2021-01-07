import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{title: "Bussines Search"}}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
    </Stack.Navigator>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyStack />
    </NavigationContainer>
  );
}