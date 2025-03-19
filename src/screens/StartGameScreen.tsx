import React, { useState } from 'react';

import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

interface IStartGameScreenProps {
  onNumberSelect: (value: number) => void
}

const StartGameScreen: React.FC<IStartGameScreenProps> = (props) => {

  const {onNumberSelect} = props;

  const [enteredNumber, setEnteredNumber] = useState('');

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {

    const _enteredNumber = parseInt(enteredNumber);

    if (isNaN(_enteredNumber) || _enteredNumber < 1 || _enteredNumber > 99) {

      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 to 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;

    }

    onNumberSelect(_enteredNumber);

  }

  const numberInputAttributes = {
    style: styles.numberInput,
    maxLength: 2,
    value: enteredNumber,
    onChangeText(text: string) {
      setEnteredNumber(text);
    }
  };

  return (
    <View style={styles.inputContainer}>

      <TextInput {...numberInputAttributes} keyboardType='number-pad' />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>

    </View>
  );

};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#3b021f',
    elevation: 3
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});