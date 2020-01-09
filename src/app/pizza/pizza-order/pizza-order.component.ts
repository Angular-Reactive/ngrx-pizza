import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromState from '../store/pizza.state';
import { Store } from '@ngrx/store';
import * as fromPizzaActions from '../../pizza/store/actions/pizza.actions';
import * as fromPizzaReducers from '../../pizza/store/reducers/pizza.reducer';
import * as fromPizzaSelectors from '../../pizza/store/selectors/pizza.selectors';



@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  // Observable that will loop over in the HTML
  pizzasS: Observable<any>;

  constructor(private store: Store<fromState.State>) { }

  ngOnInit() {
    // Getting the actual pizzas Observable
    this.pizzasS = this.store.select(fromPizzaSelectors.selectAll);
  }

  createPizza() {
    const pizza: fromState.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    }

    this.store.dispatch(new fromPizzaActions.createAction(pizza));
  }

  updatePizza(id: string, size: string) {
    this.store.dispatch(new fromPizzaActions.updateAction(id, {size: size }));
  }

  deletePizza(id) {
    this.store.dispatch(new fromPizzaActions.deleteAction(id));
  }

}
