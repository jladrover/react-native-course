import {
  StyleSheet,
  View,
  Button,
  TextInput,
  //ScrollView,
  FlatList, // better for long lists of items, off screen items are lazy loaded/rendered
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  function toggleAddGoalHandler() {
    setModalVisibility((prev) => {
      const newValue = !prev;
      console.log(newValue);
      return newValue;
    });
  }

  function addGoalHandler(goalText) {
    setGoalList((currGoals) => [
      ...currGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setModalVisibility(false);
    //console.log(goalList);
  }

  function deleteGoalHandler(id) {
    console.log("Delete Triggered!");
    setGoalList((currGoals) => {
      return currGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new goal" onPress={toggleAddGoalHandler} />
      {
        <GoalInput
          onAddGoal={addGoalHandler}
          showModal={modalVisibility}
          onCancel={toggleAddGoalHandler}
        />
      }
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            //console.log(itemData);
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

// better to separate jsx and stylesheet javascript code
const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "white",
    paddingTop: 64,
    paddingHorizontal: 20,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
  },
});
