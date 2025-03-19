import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from './src/constants/colors';

import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

function App() {

  const [userSelectedNumber, setUserSelectedNumber] = useState<null | number>(null);

  function selectNumberHandler(value: number) {
    setUserSelectedNumber(value);
  }

  function renderScreen() {

    if (userSelectedNumber) {
      return <GameScreen />;
    }

    return <StartGameScreen onNumberSelect={selectNumberHandler} />;
  }

  const imageBackgroundAttributes = {
    source: require('./src/assets/images/background.jpg'),
    style: styles.rootContainer,
  };

  return (
    <ImageBackground {...imageBackgroundAttributes} resizeMode='cover'>
      <View style={styles.gradientContainer}>
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.gradient} />
        <SafeAreaView>{renderScreen()}</SafeAreaView>
      </View>
    </ImageBackground>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.accent500,
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