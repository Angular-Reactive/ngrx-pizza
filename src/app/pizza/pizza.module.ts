import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { pizzaReducer } from './store/reducers/pizza.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pizza', pizzaReducer) // name of reducer and reducer itself
  ],
  declarations: [PizzaOrderComponent]
})
export class PizzaModule { }
