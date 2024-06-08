import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundGuess, setRoundGuess] = useState(0);

  function pickedUserNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setRoundGuess(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(true);
  }

  let defaultScreen = (
    <StartGameScreen onPickedNumber={pickedUserNumberHandler} />
  );

  if (userNumber) {
    defaultScreen = (
      <GameScreen userNumber={userNumber} gameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    defaultScreen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={roundGuess}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={['#FF6347', '#ada92f', '#00BFFF']} // An array of colors to create the gradient
      style={styles.sectionContainer}>
      <ImageBackground
        source={require('./assets/images/backgroundImage.jpg')}
        resizeMode="cover"
        style={styles.sectionContainer}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.sectionContainer}>
          {defaultScreen}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar
        backgroundColor="#72063c"
        barStyle="light-content"
        translucent={false}
        networkActivityIndicatorVisible={true}
        animated={true}
        showHideTransition="fade"
      />
    </LinearGradient>
    // <View style={styles.sectionContainer}>
    //   <StartGameScreen />
    //   {/* <Text style={{color: 'blue', fontSize: 30}}></Text> */}
    //   {/* <StatusBar style="auto" /> */}
    //   <StatusBar
    //     backgroundColor="#72063c"
    //     barStyle="light-content"
    //     translucent={false}
    //     networkActivityIndicatorVisible={true}
    //     animated={true}
    //     showHideTransition="fade"
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    // backgroundColor: '#ada92f',
  },
  backgroundImage: {
    opacity: 0.6,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
