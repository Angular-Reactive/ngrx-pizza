import * as pizzaActions from '../actions/pizza.actions';
import { initialState, pizzaAdapter } from '../pizza.state';

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
