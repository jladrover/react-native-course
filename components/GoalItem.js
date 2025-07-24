import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressData) => pressData.pressed && styles.goalPress}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    borderRadius: 9,
    backgroundColor: "lightblue",
    padding: "8",
    margin: "12",
  },
  goalPress: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
