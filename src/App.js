import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import { useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
 
const App = () => {
  const oneTodo = useSelector(state => state.todos.oneTodo);

  return (
    <>
      {oneTodo && <EditTodo />}
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/add" element={<AddTodo />} />
        <Route path="/" element={<TodoList />} />
      </Routes>
    </>
  )
}

export default App