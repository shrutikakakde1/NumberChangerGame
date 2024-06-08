import {Text, StyleSheet, Platform} from 'react-native';

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    //    borderWidth: Platform.OS === 'android' ? 1 : 2,
    borderWidth: Platform.select({ios: 2, android: 1}),
    borderColor: '#ddb52f',
    padding: 12,
    borderRadius: 9,
  },
});
