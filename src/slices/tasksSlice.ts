/* eslint no-param-reassign: "off" */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '.';

type TaskType = {
  id: string;
  name: string;
}

const tasksAdapter = createEntityAdapter<TaskType>();

const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
    addTasks: tasksAdapter.addMany,
    removeTask: tasksAdapter.removeOne,
    updateTask: tasksAdapter.updateOne,
  },
});

export const taskSelectors = tasksAdapter.getSelectors((state: RootState) => state.tasks);

export const {
  addTask, addTasks, removeTask, updateTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
