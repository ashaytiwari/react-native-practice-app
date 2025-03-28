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

    const stackNavigatorAttributes = {
      initialRouteName: screenNames.MEALS_CATEGORIES,
      screenOptions: {
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: Colors.whiteColor,
        contentStyle: {backgroundColor: Colors.secondaryColor}
      }
    };

    return (
      <Stack.Navigator{...stackNavigatorAttributes}>
        <Stack.Screen
          name={screenNames.MEALS_CATEGORIES}
          component={CategoriesScreen}
          options={{ title: 'All Categories' }}
        />
        <Stack.Screen
          name={screenNames.MEALS_OVERVIEW}
          component={MealsOverviewScreen}
          options={{ title: 'Meals Overview' }}
        />
      </Stack.Navigator>
    );

  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.primaryColor} />
      <NavigationContainer>
        {renderRootStack()}
      </NavigationContainer>
    </>
  );

}

export default App;