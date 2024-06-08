import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.numberText}> {children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  outerContainer: {
    borderWidth: 1,
    borderColor: Colors.primary300,
    padding: 20,
    borderRadius: 9,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
