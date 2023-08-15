import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        oneTodo: null
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        changeTodoStatus: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    todo.status = !todo.status;
                };
                return todo;
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        getOneTodo: (state, action) => {
            let oneTodo = state.todos.find(todo => todo.id === action.payload);
            state.oneTodo = oneTodo;
        },
        saveChanges: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) return action.payload;
                return todo;
            });
            state.oneTodo = null;
        }
    }
});

export const { addTodo, changeTodoStatus, deleteTodo, getOneTodo, saveChanges } = todoSlice.actions;
export default todoSlice.reducer;