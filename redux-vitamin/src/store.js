import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice to manage tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

// Export actions
export const { addTask, deleteTask } = tasksSlice.actions;

// Create and export the store
const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
