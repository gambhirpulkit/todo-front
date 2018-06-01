import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {TodoTask} from './models/TodoTask';
import {State} from './reducers/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo_task: Observable<TodoTask[]>;
  title = 'Todo app';

  constructor(private store: Store<State>) {
    this.todo_task = store.select('task');
  }
}
