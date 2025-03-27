import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data';
import CategoryGridTile from '../components/CategoryGridTile';
import { Colors } from '../helpers/colors';

function CategoriesScreen() {

  function renderCategoryGridTileItem(itemData: any) {

    const categoryGridTileAttributes = {
      title: itemData.item.title,
      color: itemData.item.color
    };

    return <CategoryGridTile {...categoryGridTileAttributes} />;

  }


  const categoriesFlatListAttributes = {
    data: CATEGORIES,
    numColumns: 2,
    keyExtractor: (item: any) => item.id,
    renderItem(itemData: any) {

      const categoryGridTileAttributes = {
        title: itemData.item.title,
        color: itemData.item.color
      };

      return <CategoryGridTile {...categoryGridTileAttributes} />;
    }
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
    backgroundColor: Colors.darkBGColor
  }
});