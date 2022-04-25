//import About from './src/screans/About';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/Home";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* <View style={styles.container}>
      <ButtonText name={Names.name} path={Names.name}></ButtonText>
      <ButtonText name="Portfólio" path="portfolio"></ButtonText>
      <ButtonText name="Redes Sociais" path="social"></ButtonText>
      <ButtonText name="Contato" path="contact"></ButtonText>
    </View> */
