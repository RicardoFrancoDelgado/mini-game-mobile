import { View, Text, StyleSheet } from "react-native";

function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text>Game Over!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default GameOverScreen;