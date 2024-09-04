import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.primary500,
    marginTop: 20,
    padding: 24
  }
})

export default Title
