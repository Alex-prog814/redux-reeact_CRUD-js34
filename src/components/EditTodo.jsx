import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveChanges } from '../store/todoSlice';

const EditTodo = () => {
    const oneTodo = useSelector(state => state.todos.oneTodo);

    const [todo, setTodo] = useState(oneTodo);

    const dispatch = useDispatch();

  return (
    <div>
        <h3>Edit TODO component</h3>
        <input type="text" onChange={e => setTodo({ ...todo, body: e.target.value })} value={todo.body} />
        <button onClick={() => dispatch(saveChanges(todo))}>Save</button>
    </div>
  )
}

export default EditTodo