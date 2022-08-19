import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/Constants';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste</Text>
      <Text style={styles.text}>Olar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark
  },
  text: {
    color: COLORS.text.dark
  }
});

export default Register;
