import { TodoTask } from '../models/TodoTask';
import { Action } from '@ngrx/store';

export const TASKS_FETCH = '[Task] Fetch';

export class TasksFetchAction implements Action {
  type = TASKS_FETCH;

  constructor(public payload: TodoTask[]) {}
}
