import { StatusBar, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "./src/helpers/colors";
import { screenNames } from "./src/helpers/screenNames";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import { RootStackParamList } from "./src/interfaces/navigation";
import MealsDetailsScreen from "./src/screens/MealsDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./src/screens/FavoritesScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {

  const drawerNavigatorAttributes = {
    initialRouteName: screenNames.MEALS_CATEGORIES,
    screenOptions: {
      headerStyle: { backgroundColor: Colors.primaryColor },
      headerTintColor: Colors.whiteColor,
      sceneContainerStyle: { backgroundColor: Colors.secondaryColor },
      drawerContentStyle: {backgroundColor: Colors.secondaryColor},
      drawerInactiveTintColor: Colors.darkBGColor,
      drawerActiveTintColor: Colors.primaryColor,
    }
  };

  return (
    <Drawer.Navigator {...drawerNavigatorAttributes}>
      <Drawer.Screen
        name={screenNames.MEALS_CATEGORIES}
        component={CategoriesScreen}
        options={{ title: 'All Categories' }}
      />
      <Drawer.Screen
        name={screenNames.FAVORITES}
        component={FavoritesScreen}
        options={{ title: 'Favorites Meals' }}
      />
    </Drawer.Navigator>
  );

}

function App() {

  function renderRootStackNavigator() {

    const stackNavigatorAttributes = {
      initialRouteName: screenNames.MEALS_CATEGORIES,
      screenOptions: {
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: Colors.whiteColor,
        contentStyle: { backgroundColor: Colors.secondaryColor }
      }
    };

    return (
      <Stack.Navigator{...stackNavigatorAttributes}>
        <Stack.Screen
          name={screenNames.DRAWER_ROOT}
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.MEALS_OVERVIEW}
          component={MealsOverviewScreen}
          options={{ title: 'Meals Overview' }}
        />
        <Stack.Screen
          name={screenNames.MEALS_DETAILS}
          component={MealsDetailsScreen}
          options={{ title: 'Meals Details' }}
        />
      </Stack.Navigator>
    );

  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.primaryColor} />
      <NavigationContainer>
        {renderRootStackNavigator()}
      </NavigationContainer>
    </>
  );

}

export default App;