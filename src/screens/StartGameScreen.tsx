import React from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {

  const numberInputAttributes = {
    style: styles.numberInput,
    maxLength: 2,
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput {...numberInputAttributes} keyboardType='number-pad' />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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