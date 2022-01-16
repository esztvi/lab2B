import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [addNewGoal, setAddNewGoal] = useState(false);
  const [currentGoals, setCurrentGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");


  const addGoal = () => {
    let goals = [... currentGoals];
    goals.push(newGoal);
    setCurrentGoals(goals);
    setAddNewGoal(false);
    setNewGoal("");
  }
  if (addNewGoal === true) {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="placeholder text..."
          value={newGoal}
          onChangeText={(goal) => setNewGoal(goal)}
        />
        <Button title = "Add goal" onPress={() => addGoal()}/>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setAddNewGoal(true)} />
      <Text style={styles.titleText}>Goals:</Text>
    <View>
      
    {/* mapping each goal to a text item */}
    {currentGoals.map((goal, index) => (
      <Text key ={index} style = {styles.itemText}>
        {goal}
      </Text>
    ))}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    marginVertical: 5,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    padding: 10,
  },
  itemText: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
    width: 300,
    textAlign: "center",
  },
});
