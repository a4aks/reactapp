import React, { useState } from 'react';
import { TodoInput } from './TodoInput';
import { Todoitem } from './Todoitem';

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <div>
                    {todos.map((todo) => {
                       return(
                         <Todoitem todo = {todo}/>
                       )
                    })}
            </div>

            <TodoInput todos ={todos} setTodos = {setTodos}/>
        </div>
    )
}
