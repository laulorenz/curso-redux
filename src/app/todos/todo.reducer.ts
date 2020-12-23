import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';


export const estadoinicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del capitan america')
];

const _todoReducer = createReducer(
  estadoinicial,

  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),

)

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
