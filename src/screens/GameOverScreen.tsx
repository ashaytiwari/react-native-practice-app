import { View, Image, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

interface IGameOverScreenProps {
  rounds: number,
  enteredNumber: number
  onGameRestart: () => void
}

const GameOverScreen: React.FC<IGameOverScreenProps> = (props) => {

  const { rounds, enteredNumber, onGameRestart } = props;

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to
        guess the number <Text style={styles.highlight}>{enteredNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onGameRestart}>Start New Game</PrimaryButton>
    </View>
  );

}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    color: Colors.primary500,
    fontWeight: 'bold'
  },
});