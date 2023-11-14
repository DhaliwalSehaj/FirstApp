import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText(''); 
    }
  };

  return (
    <div>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </div>
  );
}

export default ToDoForm;
