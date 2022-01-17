import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';


const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: 'First item', completed: true },
        { id: 2, title: 'Second item', completed: false },
        { id: 3, title: 'Third item', completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false,
            }
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;