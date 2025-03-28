import { StatusBar, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "./src/helpers/colors";
import { screenNames } from "./src/helpers/screenNames";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import { RootStackParamList } from "./src/interfaces/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {

  function renderRootStack() {

    return (
      <Stack.Navigator
        initialRouteName={screenNames.MEALS_CATEGORIES}>
        <Stack.Screen name={screenNames.MEALS_CATEGORIES} component={CategoriesScreen} options={{ title: 'Meals Categories' }} />
        <Stack.Screen name={screenNames.MEALS_OVERVIEW} component={MealsOverviewScreen} options={{ title: 'Meals Overview' }} />
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