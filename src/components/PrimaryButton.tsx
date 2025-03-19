import React from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

interface IPrimaryButtonProps {
  children: React.ReactNode,
  onPress?: () => void
};

const PrimaryButton: React.FC<IPrimaryButtonProps> = (props) => {

  const { children, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );

};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});