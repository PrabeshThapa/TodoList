
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
 
export default function ToDo() {

  const [newTask, setnewTask] = useState('');
 
  const [appTasks, appTask] = useState([]);
 
  const taskInputHandler = (enteredText) => {
    setnewTask(enteredText);
  };
 
  const addTaskHandler = () =>{
    appTask(currentTask => [...currentTask, newTask]);
    console.log(newTask);
  };
 
  return (
    <View style= {styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput
          placeholder = "Enter Your Task"
          style = {styles.input}
          onChangeText = {taskInputHandler}
          value = {newTask}
        />
        <Button title = "Add"
        onPress = {addTaskHandler}
        
        /> 
      </View>
     
      <Text style={styles.heading}>To Do List {"\n"}</Text>
      <View>
        {appTasks.map((task) => <Text>{task}</Text>)}
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor:"black", 
    borderWidth:1 , 
    padding :20,
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    bottom:20,
  },
  heading :{
    fontWeight: 'bold',
    color : 'red',

  }
});