import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPizzaActions from '../../pizza/store/actions/pizza.actions';
import * as fromPizza from '../../pizza/store/reducers/pizza.reducer';



@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  // Observable that will loop over in the HTML
  pizzas$: Observable<any>;

  constructor(private store: Store<fromPizza.State>) { }

  ngOnInit() {
    // Getting the actual pizzas Observable
    this.pizzas$ = this.store.select(fromPizza .selectAll);

  }

  createPizza() {
    const pizza: fromPizza.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    };

    this.store.dispatch(new fromPizzaActions.CreateAction(pizza));
  }

  updatePizza(id: string, size: string) {
    this.store.dispatch(new fromPizzaActions.UpdateAction(id, {size: size }));
  }

  deletePizza(id) {
    this.store.dispatch(new fromPizzaActions.DeleteAction(id));
  }

}
