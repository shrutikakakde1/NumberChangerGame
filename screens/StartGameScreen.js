import {TextInput, View, Text, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import {useState} from 'react';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';

function StartGameScreen({onPickedNumber}) {
  const [enteredValue, setEnteredValue] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredValue(enteredText);
  }
  function alertInputHandler() {
    setEnteredValue('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (
      isNaN(chosenNumber) ||
      chosenNumber >= 99 ||
      chosenNumber <= 0 ||
      specialCharacterRegex.test(enteredValue)
    ) {
      Alert.alert(
        'Invalid Number',
        'Please enter an input as a number between 1 & 99',
        [{text: 'Okay', onPress: alertInputHandler, style: 'cancel'}],
      );
      return;
    }
    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Guess My Number</Title>
      <Card>
        <View style={{alignItems: 'center', paddingBottom: 10}}>
          <Text style={{fontSize: 18}}>Enter a number</Text>
          <TextInput
            style={styles.textInputContainer}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <PrimaryButton onPressButton={alertInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPressButton={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  textInputContainer: {
    height: 55,
    width: 55,
    fontSize: 28,
    borderBottomColor: '#72063c',
    borderBottomWidth: 2,
    color: 'white',
    marginVertical: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  screen: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
});
