import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './src/screens/StartGameScreen';

function App() {
  const imageBackgroundAttributes = {
    source: require('./src/assets/images/background.jpg'),
    style: styles.rootContainer,
  };

  return (
    <ImageBackground {...imageBackgroundAttributes} resizeMode='cover'>
      <View style={styles.gradientContainer}>
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.gradient} />
        <StartGameScreen />
      </View>
    </ImageBackground>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
  gradientContainer: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7
  },
});