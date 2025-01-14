import React from 'react'
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form action="" className='input'>
        <input type="text" className='input__box' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button className='input_submit' type="submit">Go</button>
    </form>
  )
}

export default InputField