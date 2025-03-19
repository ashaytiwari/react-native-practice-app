import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Title from '../components/Title';

const GameScreen = () => {

  return (
    <View style={styles.gameScreenView}>
      <Title>Opponent's Guess</Title>
    </View>
  );

};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenView: {
    padding: 16,
  }
});