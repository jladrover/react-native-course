import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartGameScreen({ onConfirm }) {
  const [enteredNumber, setEnteredNumber] = useState(""); // string since this will be binded to textinput and it always returns a string, even if numpad

  function numberInputHandler(enteredText) {
    // auto given param by react
    setEnteredNumber(enteredText);
    console.log(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert...
      Alert.alert(
        "Invalid number entered!",
        "Please enter a number between 1 - 99.",
        [{ text: "Ok", style: "default", onPress: resetInputHandler }]
      );
      return;
    }
    onConfirm(chosenNumber);
    // else we should then dicontinue with game logic
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number!</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          // autoCapitalize="none"
          // autoCorrect="none"
          onChangeText={numberInputHandler}
          style={styles.numberInput}
          value={enteredNumber}
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
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
  instructionText: {
    fontSize: 24,
    color: "#ddb52f",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 1,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
