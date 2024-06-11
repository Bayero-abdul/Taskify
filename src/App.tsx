import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './model';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);

  return (
    <div>
       <div className='heading'>Taskify</div>
       <InputField todo={todo} setTodo={setTodo}></InputField>
    </div>
   
  )
}

export default App;
