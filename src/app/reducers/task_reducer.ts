import * as task from '../actions/tasks';
import {TodoTask} from '../models/TodoTask';


const initialState: TodoTask = {
  name: 'Blahh',
  active: false,
}


export function reducer(state: TodoTask[] = [initialState], action: task.TasksFetchAction) {
  console.log(action.type)
  console.log(action)
  switch (action.type) {
    case task.TASKS_FETCH:
      return [...state, action.payload];
    default:
      return state;
  }
}
