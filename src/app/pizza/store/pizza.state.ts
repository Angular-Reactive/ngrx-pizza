import { EntityState, createEntityAdapter } from '@ngrx/entity';

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
}

// Initial state
export const initialState: State = pizzaAdapter.getInitialState(defaultPizza);
