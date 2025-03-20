import React, { useEffect, useState } from 'react';

import { Alert, StyleSheet, Text, View } from 'react-native';

import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';

import { generateRandomBetween } from '../utilities';
import Colors from '../constants/colors';
import PrimaryButton from '../components/PrimaryButton';

interface IGameScreenProps {
  enteredNumber: number,
  onGameOver: () => void
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<IGameScreenProps> = (props) => {

  const { enteredNumber, onGameOver } = props;

  const initialGuess = generateRandomBetween(1, 100, enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === enteredNumber) {
      onGameOver();
    }
  }, [currentGuess, enteredNumber, onGameOver]);

  function nextGuessHandler(direction: string) {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < enteredNumber) ||
      (direction === 'greater' && currentGuess > enteredNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.gameScreenView}>

      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text style={styles.label}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
          </View>
        </View>
      </View>

    </View>
  );

};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenView: {
    padding: 16,
  },
  label: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  buttonContainer: {
    flex: 1
  }
});