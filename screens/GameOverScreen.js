import {Image, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.mainContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/win.jpg')}
        />
      </View>
      <Text style={{fontSize: 16, margin: 28, textAlign: 'center'}}>
        Your phone needed{' '}
        <Text
          style={{fontWeight: 'bold', color: Colors.primary400, fontSize: 20}}>
          {' '}
          {roundNumber}{' '}
        </Text>{' '}
        rounds {'\n'} to guess the number{' '}
        <Text
          style={{fontWeight: 'bold', color: Colors.primary400, fontSize: 20}}>
          {' '}
          {userNumber}
        </Text>{' '}
        .
      </Text>
      <PrimaryButton onPressButton={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,

    width: 300,
    height: 300,
    overflow: 'hidden',
    margin: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
