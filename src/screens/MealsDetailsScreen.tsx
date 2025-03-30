import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../helpers/colors';

function MealsDetailsScreen() {

  const route: any = useRoute();
  const navigation = useNavigation<any>();

  const mealDetails = route.params.mealDetails;

  useLayoutEffect(() => {

    navigation.setOptions({
      title: mealDetails?.title,
      // headerRight: () => renderHeaderFavoriteControl()
    });

  }, [mealDetails]);

  function renderHeaderFavoriteControl() {
    return <Button title='Favorite' />;
  }

  function renderListItemsSection(title: string, items: Array<string>) {

    return (
      <View style={styles.listItemSection}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.list}>
          {
            items.map((item, index) => (
              <Text key={index} style={styles.listItemText}>{item}</Text>
            ))
          }
        </View>
      </View>
    );

  }

  const mealImageAttributes = {
    source: { uri: mealDetails.imageUrl },
    style: styles.mealImage
  };

  return (
    <ScrollView>
      <View>
        <Image {...mealImageAttributes} />
        <Text style={styles.mealTitle}>{mealDetails.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{mealDetails.duration}m</Text>
          <Text style={styles.detailItem}>{mealDetails.complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{mealDetails.affordability.toUpperCase()}</Text>
        </View>
        {renderListItemsSection('Ingredients', mealDetails.ingredients)}
        {renderListItemsSection('Steps', mealDetails.steps)}
      </View>
    </ScrollView>
  );

}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  mealImage: {
    width: '100%',
    height: 300
  },
  mealTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.darkBGColor,
    marginVertical: 15,
    textAlign: 'center'
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    columnGap: 20
  },
  detailItem: {
    color: Colors.tertiaryColor,
    fontSize: 15
  },
  listItemSection: {
    margin: 20
  },
  sectionTitle: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey,
    color: Colors.darkBGColor,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 8
  },
  list: {
    marginTop: 15,
    rowGap: 10
  },
  listItemText: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center'
  }
});