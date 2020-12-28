import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFooterComponent implements OnInit {

  public filtroActual: actions.filtrosValidos;
  public filtros: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  public pendientes: number;

  constructor(
    private store: Store<AppState>,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;

      this.pendientes = state.todos.filter(todo => !todo.completado).length;

      this.changeDetectorRef.detectChanges();
    });
  }

  public cambiarFiltro(filtro: actions.filtrosValidos): void {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }

  public limpiarCompletados(): void {
    this.store.dispatch(borrarCompletados())
  }

}
