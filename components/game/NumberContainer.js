import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItens: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.primary500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    textAlign: 'center',
  }
})

export default NumberContainer
