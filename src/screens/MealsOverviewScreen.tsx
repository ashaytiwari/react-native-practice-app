import React, { useEffect, useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { CATEGORIES, MEALS } from '../data';
import MealItem from '../components/MealItem';
import { screenNames } from '../helpers/screenNames';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';

function MealsOverviewScreen() {

  const route: any = useRoute();
  const navigation = useNavigation<any>();

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => item.categoryIds.indexOf(categoryId) >= 0);

  useLayoutEffect(() => {

    const category = CATEGORIES.find((item) => item.id === categoryId);

    navigation.setOptions({
      title: category?.title
    });

  }, [categoryId])

  function renderMealItem(itemData: any) {

    const { title, imageUrl, duration, affordability, complexity } = itemData.item;

    const mealItemAttributes = {
      title,
      imageURL: imageUrl,
      duration,
      affordability,
      complexity,
      onPress() {
        navigation.navigate(screenNames.MEALS_DETAILS, {
          mealDetails: itemData.item
        })
      }
    };

    return <MealItem {...mealItemAttributes} />;

  }

  const mealsFlatListAttributes = {
    data: displayedMeals,
    keyExtractor: (item: any) => item.id,
    renderItem: renderMealItem
  };

  return (
    <View style={styles.container}>
      <FlatList {...mealsFlatListAttributes} />
    </View>
  );

}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});