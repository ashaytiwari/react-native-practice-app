import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../helpers/colors';

interface IMealItemProps {
  title: string,
  imageURL: string,
  duration: string,
  affordability: string,
  complexity: string,
  onPress: () => void
}

const MealItem: React.FC<IMealItemProps> = (props) => {

  const { title, imageURL, duration, affordability, complexity, onPress } = props;

  const mealImageAttributes = {
    source: { uri: imageURL },
    style: styles.mealImage
  };

  return (
    <View style={styles.mealItemContainer}>
      <Pressable>
        <View>
          <Image {...mealImageAttributes} />
          <Text style={styles.mealItemTitle}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );

};

export default MealItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: Colors.primaryColor,
    elevation: 4
  },
  mealItemTitle: {
    color: Colors.whiteColor,
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center'
  },
  mealImage: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center'
  },
  detailItem: {
    marginHorizontal: 4,
    color: Colors.grey
  }
});