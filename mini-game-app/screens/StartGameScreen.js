import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 60,
    marginHorizontal: 24,
    borderRadius: 9,
    padding: 16,
    backgroundColor: "#72063c",
    shadowColor: "black", // iOS specific shadow property
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  numberInput: {
    height: 50,
    width: 55,
    fontSize: 32,
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 1,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
});
