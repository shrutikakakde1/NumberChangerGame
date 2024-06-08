import {View, StyleSheet} from 'react-native';

function Card({children}) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
    padding: 16,
    backgroundColor: '#4e0329',
    margin: 35,
    borderRadius: 10,
    width: '80%',
    elevation: 15,
    shadowColor: '#ffa',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    opacity: 0.8,
    justifyContent: 'center',
  },
});
