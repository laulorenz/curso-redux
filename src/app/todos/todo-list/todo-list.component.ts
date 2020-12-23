import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(
    private store: Store<AppState>,
    private changeDectorRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.store.select('todos').subscribe((todos) => {
      this.todos = todos;
      this.changeDectorRef.detectChanges();
    });
  }

}
