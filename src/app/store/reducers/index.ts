import { ActionReducerMap } from '@ngrx/store';
import { pizzaReducer } from '../../pizza/store/reducers/pizza.reducer';



export const reducers: ActionReducerMap<any> = {
  pizza: pizzaReducer
};
