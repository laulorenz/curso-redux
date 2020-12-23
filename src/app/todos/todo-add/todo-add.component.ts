import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
