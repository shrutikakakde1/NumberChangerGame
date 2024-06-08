import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({children, onPressButton}) {
  function PressedButton() {
    console.log('Pressed');
  }
  return (
    <View style={styles.viewContainer}>
      <Pressable
        onPress={onPressButton}
        andrzoid_ripple={{color: Colors.primary300}}>
        <Text style={{fontSize: 18, color: 'white'}}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: Colors.primary300,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,

    alignItems: 'center',
    color: 'white',
  },
});
