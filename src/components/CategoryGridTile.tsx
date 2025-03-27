import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

interface ICategoryGridTileProps {
  title: string,
  color: string
}

const CategoryGridTile: React.FC<ICategoryGridTileProps> = (props) => {

  const { title, color } = props;

  const pressableControlAttributes = {
    android_ripple: { color: '#ccc' },
    style(event: any) {
      return [
        styles.button,
        event.pressed ? styles.buttonPressed : null
      ]
    }
  };

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable {...pressableControlAttributes}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );

};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});