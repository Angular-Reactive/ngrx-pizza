import * as pizzaActions from '../actions/pizza.actions';
import { initialState, pizzaAdapter } from '../pizza.state';
import { DELETE, deleteAction } from '../actions/pizza.actions';
import { s } from '@angular/core/src/render3';

export function pizzaReducer(state = initialState, action: pizzaActions.PizzaActions) {
  switch(action.type) {
    case pizzaActions.CREATE:
      return pizzaAdapter.addOne(action.pizza, state);

    case pizzaActions.UPDATE:
      return pizzaAdapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);

    case pizzaActions.DELETE:
      return pizzaAdapter.removeOne(action.id, state);

    default:
      return state;
  }
}
