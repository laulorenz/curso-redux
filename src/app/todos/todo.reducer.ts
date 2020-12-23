import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';


export const estadoinicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de ironman'),
  new Todo('Robar escudo del capitan america')
];

const _todoReducer = createReducer(
  estadoinicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)])
)

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
