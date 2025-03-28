import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { MEALS } from '../data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen() {

  const route: any = useRoute();
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => item.categoryIds.indexOf(categoryId) >= 0);

  function renderMealItem(itemData: any) {

    const {title, imageUrl, duration, affordability, complexity} = itemData.item;

    const mealItemAttributes = {
      title,
      imageURL: imageUrl,
      duration,
      affordability,
      complexity,
      onPress() { }
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