import React, { useState } from 'react';

import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState<Array<any>>([]);

  function inputChangeHandler(text: string) {
    setEnteredGoalText(text);
  }

  function addGoal() {

    if (!enteredGoalText) {
      return;
    }

    const newGoal = {
      id: Math.random().toString(),
      text: enteredGoalText
    };
    setGoals((_goals) => [..._goals, newGoal]);
    setEnteredGoalText('');

  }

  function deleteGoalItem(id: number) {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  }

  function renderGoalItem(goalItem: any) {

    return (
      <Pressable onPress={() => { deleteGoalItem(goalItem.item.id) }}>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{goalItem.item.text}</Text>
        </View>
      </Pressable>
    );

  }

  return (
    <View style={styles.appContainer}>

      <Text style={styles.heading}>Goals Tracker</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your goals' value={enteredGoalText} onChangeText={inputChangeHandler} />
        <Button title={'Add Goal'} onPress={addGoal} />
      </View>

      <View style={styles.goalsContainer}>

        <FlatList
          data={goals}
          renderItem={renderGoalItem}
          keyExtractor={(item) => item.id}
        />

      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#5e69ee',
    paddingTop: 50,
    paddingHorizontal: 16,
    height: '100%'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    columnGap: 5,
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    flex: 1,
  },
  goalsContainer: {
    marginVertical: 20,
    flex: 8
  },
  goalItem: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 15
  },
  goalText: {
    fontSize: 16,
    color: '#5e69ee',
    fontWeight: '500'
  }
});

export default App;