import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../../constants/colors';

const deviceWidth = Dimensions.get('window').width;

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
    padding: deviceWidth < 380 ? 18 : 22,
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
