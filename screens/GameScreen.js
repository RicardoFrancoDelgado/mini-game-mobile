import { View, Text, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'

import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber }) {
  const initialNumberGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  )
  const [currentGuess, setCurrentGuess] = useState(initialNumberGuess)

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert('Para de mentir ai pilantra', 'Tu sabe que ta errado', [
        { text: 'Foi mal!', style: 'cancel' }
      ])
      return
    }

    console.log(minBoundary, maxBoundary)

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRndNumber)
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
})

export default GameScreen
