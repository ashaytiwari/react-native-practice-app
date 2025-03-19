import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

interface ITitleProps {
  children: React.ReactNode
}

const Title: React.FC<ITitleProps> = (props) => {

  const { children } = props;

  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );

};

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12
  }
});