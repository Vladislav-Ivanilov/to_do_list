import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('todos')) ?? [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    changeStatus: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, changeStatus } = todosSlice.actions;
