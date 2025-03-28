import { StatusBar, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import { Colors } from "./src/helpers/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenNames } from "./src/helpers/screenNames";

const Stack = createNativeStackNavigator();

function App() {


  function renderRootStack() {

    return (
      <Stack.Navigator>
        <Stack.Screen name={screenNames.MEALS_CATEGORIES} component={CategoriesScreen} />
      </Stack.Navigator>
    );

  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.darkBGColor} />
      <NavigationContainer>
        {renderRootStack()}
      </NavigationContainer>
    </>
  );

}

export default App;