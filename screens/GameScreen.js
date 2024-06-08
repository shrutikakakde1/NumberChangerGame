import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Title from '../components/ui/Title';
import {useEffect, useState} from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import GuessLogItemContainer from '../components/game/GuessLogItemContaiber';
function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else return randomNumber;
}
let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({userNumber, gameOver}) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [roundGuess, setRoundGuess] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOver(roundGuess.length);
    }
  }, [currentGuess, userNumber, gameOver]);

  useEffect(() => {
    (minBoundry = 1), (maxBoundry = 100);
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong ...', [
        {text: 'Sorry!!!', style: 'destructive'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const newRandNumber = generateRandomNumber(
      minBoundry,
      maxBoundry,
      currentGuess,
    );
    setCurrentGuess(newRandNumber);
    setRoundGuess(prevGuessRounds => [newRandNumber, ...prevGuessRounds]);
  }
  const guessRoundsListLength = roundGuess.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            textAlign: 'center',
            padding: 20,
          }}>
          Higher or Lower?
        </Text>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              opacity: 0.9,
            }}>
            <PrimaryButton onPressButton={nextGuessHandler.bind(this, 'lower')}>
              <Icon name="minus" size={15} color="white" />
            </PrimaryButton>
            <PrimaryButton
              onPressButton={nextGuessHandler.bind(this, 'greater')}>
              <Icon name="plus" size={15} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      {/* {roundGuess.map(roundGuess => (
          <Text key={roundGuess}>{roundGuess}</Text>
        ))} */}
      <FlatList
        data={roundGuess}
        renderItem={itemData => (
          <GuessLogItemContainer
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.index}
          />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
