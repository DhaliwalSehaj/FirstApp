// Code
/**
 * My To-Do List App
 *
 * @format
 */
import React, { useState } from 'react'; 
import ToDoForm from './ToDoForm';
import Display from './display';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

// Define the initial list of tasks
const initialTasks = [
  'Do laundry',
  'Go to gym',
  'Walk dog',
];

import ToDoList from './todolist'; 

export default function App() {
    const [name,setName]=useState("")
    const addTask = (task) => {
      setTasks([...tasks, task]);
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <ToDoList key={index} item={{ key: index, text: task }} />
        ))}
      </ScrollView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..." onChangeText={(text)=>
        setName(text)}
        />
        <Display name={name}/>
        <Button title="Add" />
        <ToDoForm addTask={addtask}/>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  /* ... */
});
}