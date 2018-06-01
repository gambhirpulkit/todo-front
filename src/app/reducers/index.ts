import { TodoTask } from './../models/TodoTask';
import * as fromTask from './task_reducer';

export interface State {
  task: TodoTask[];
}

export const reducers = {
  task: fromTask.reducer
}

