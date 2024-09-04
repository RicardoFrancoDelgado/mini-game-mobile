import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>#{roundNumber}</Text>
      <Text style={styles.listText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
listItem: {
  borderColor: Colors.primary900,
  borderWidth: 1,
  borderRadius: 40,
  padding: 12,
  marginVertical: 8,
  backgroundColor: Colors.primary500,
  flexDirection: 'row',
  justifyContent:'space-between',
  width: '100%',
  elevation: 4,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 3,
  shadowOpacity: 0.25
}
})

export default GuessLogItem