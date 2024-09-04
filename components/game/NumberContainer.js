import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItens: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.primary500,
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
  }
})

export default NumberContainer
