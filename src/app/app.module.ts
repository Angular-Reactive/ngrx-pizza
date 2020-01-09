import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PizzaModule } from './pizza/pizza.module';

import { AppComponent } from './app.component';

import { reducers } from './store/reducers/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    PizzaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
