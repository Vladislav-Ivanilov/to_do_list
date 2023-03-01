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

    removeTodo: (state, action) => {
      const newArr = state.items.filter(item => item.id !== action.payload);
      state.items = newArr;
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo } = todosSlice.actions;
