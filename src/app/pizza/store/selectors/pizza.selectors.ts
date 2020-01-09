import { createFeatureSelector } from "@ngrx/store";
import { State, pizzaAdapter } from '../pizza.state';

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
