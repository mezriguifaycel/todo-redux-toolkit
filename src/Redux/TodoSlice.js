import { createSlice } from "@reduxjs/toolkit";
const TodoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[{
            id: Math.random(),
            task: 'Learn Express',
            isDone: false
        }],
        Filtre : 'All'
    },
    reducers :{
        AddTodo : (state,{type,payload})=>{
            state.todos.push(payload)
        },

        DeleteTodo : (state,{type,payload})=>{
           const filterdTodos = state.todos.filter( todo=> todo.id !== payload)
           state.todos = filterdTodos
        },

        ToggleTodo : (state,{type,payload})=>{
            state.todos.map(todo=> (todo.id == payload) ? todo.isDone = !todo.isDone : todo)
        },
        UpdateTask : (state,{type,payload})=>{
            state.todos.map(todo=> (todo.id === payload.id)? todo.task = payload.task : todo)
        },
        FilterByAll : (state) =>{
            state.Filtre = 'All'
        },
        FiltrebyDone :(state) =>{
            state.Filtre = 'Done'
        },
        FiltrebyUnDone : (state)=>{
            state.Filtre = 'UnDone'
        }
    }
})

export default TodoSlice.reducer
export const {AddTodo,DeleteTodo,ToggleTodo,UpdateTask,FilterByAll,FiltrebyDone,FiltrebyUnDone} = TodoSlice.actions
