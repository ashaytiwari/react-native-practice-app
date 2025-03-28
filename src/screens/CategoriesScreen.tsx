import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { CATEGORIES } from '../data';

import CategoryGridTile from '../components/CategoryGridTile';
import { Colors } from '../helpers/colors';
import { screenNames } from '../helpers/screenNames';

import { RootStackParamList } from '../interfaces/navigation';

function CategoriesScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function renderCategoryGridTileItem(itemData: any) {

    const categoryGridTileAttributes = {
      title: itemData.item.title,
      color: itemData.item.color,
      onPress() {
        navigation.navigate(screenNames.MEALS_OVERVIEW, {
          categoryId: itemData.item.id
        });
      }
    };

    return <CategoryGridTile {...categoryGridTileAttributes} />;

  }


  const categoriesFlatListAttributes = {
    data: CATEGORIES,
    numColumns: 2,
    keyExtractor: (item: any) => item.id,
    renderItem: renderCategoryGridTileItem
  };

  return (
    <View style={styles.screen}>
      <FlatList {...categoriesFlatListAttributes} />
    </View>
  );

}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: Colors.darkBGColor
  }
});