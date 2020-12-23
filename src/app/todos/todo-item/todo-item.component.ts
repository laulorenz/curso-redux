import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando = false;

  constructor() { }

  public ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  }

  public editar(): void {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  public terminarEdicion(): void {
    this.editando = false;
  }

}
