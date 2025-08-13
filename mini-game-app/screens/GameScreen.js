import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { use, useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum == exclude) {
    return generateRandomBetween(max, min, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ pickedNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    pickedNumber
  );
  const [currGuess, setCurrGuess] = useState(initialGuess);

  useEffect(() => {
    if (currGuess === pickedNumber) {
      onGameOver();
    }
  });

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currGuess < pickedNumber) ||
      (direction === "higher" && currGuess > pickedNumber)
    ) {
      Alert.alert("Liar!", "Wrong button clicked...", [
        { text: "My fault", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currGuess;
    } else {
      minBoundary = currGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currGuess
    );
    setCurrGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currGuess}</NumberContainer>
      <Card>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1, // take all available space
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
