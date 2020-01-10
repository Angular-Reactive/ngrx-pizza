import * as pizzaActions from '../actions/pizza.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
// Main data interface
export interface Pizza {
  id: string;
  size: string;

}

// Entity adapter --> To format the data in a specific way as well as provide access to a number of different
// helpers for performing CRUD operations.
export const pizzaAdapter = createEntityAdapter<Pizza>();

// Make sure the Pizza interface is part of the main app state, by extending the State interface with the
// EntityState interface type.
// EntityState is just an interface that gives our data a consistent structure
export interface State extends EntityState<Pizza> {}

// Default data /initial state

const defaultPizza = {
  ids: ['123'], // Array of IDs and this makes it possible to order all of our entites
  entities: {   // entities is an object where each key and that object corresponds to an ID in the array
    '123': {
      id: '123',
      size: 'small'
    }
  }
};

// Initial state
export const initialState: State = pizzaAdapter.getInitialState(defaultPizza);


// Reducer
export function pizzaReducer(state = initialState, action: pizzaActions.PizzaActions) {
  switch (action.type) {
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

// Default selectors
/**
 * The selectors will be used to retrieve data from the store.
 */

 // Creating a feature selector
export const getPizzaState = createFeatureSelector<State>('pizza');

 // With this constants we'll be able to use all this selectors when
 // we call store select to get the data in a predefined format.
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = pizzaAdapter.getSelectors(getPizzaState);
