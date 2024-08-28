import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'
import  PrimaryButton  from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'

function StartGameScreen({ onPickedNumber }) {
  const [enteredValue, setEnteredValue] = useState('')

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
  return (
    <View style={styles.inputContainer}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    // sombra no android
    elevation: 4,
    // sombra no IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

    alignItems: 'center',
    justifyContent: 'center'
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
