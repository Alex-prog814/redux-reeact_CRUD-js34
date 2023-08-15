import React from 'react';
import styles from '../index.module.css';
import { useDispatch } from 'react-redux';
import { changeTodoStatus, deleteTodo, getOneTodo } from '../store/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.list__item}>
        <input type="checkbox" onChange={() => dispatch(changeTodoStatus(todo.id))} />
        <p className={todo.status ? styles.completed : styles.undone}>{todo.body}</p>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        <button onClick={() => dispatch(getOneTodo(todo.id))}>Edit</button>
    </li>
  )
}

export default TodoItem