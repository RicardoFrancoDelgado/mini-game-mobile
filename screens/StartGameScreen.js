import { View, TextInput, StyleSheet, Alert, Text, Dimensions, useWindowDimensions } from 'react-native'
import { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

function StartGameScreen({ onPickedNumber }) {
  const [enteredValue, setEnteredValue] = useState('')

  const { width, height } = useWindowDimensions()

  function numberInputHandler(enteredText) {
    setEnteredValue(enteredText)
  }

  function resetInputHandler() {
    setEnteredValue('')
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(enteredValue)
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
      return
    }

    onPickedNumber(choseNumber)
  }

  const marginTopDistance = devicesHeight < 380 ? 30 : 100

  return (
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
      <Title>Guess my Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const devicesHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: devicesHeight < 380 ? 30 : 100,
    alignItems: 'center'
  },

  instructionTitle: {
    color: '#f6f6f6',
    fontSize: 24
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    color: '#fff',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  buttonContainer: {
    flex: 1
  }
})

export default StartGameScreen
