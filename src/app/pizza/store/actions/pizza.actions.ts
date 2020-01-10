import { Action } from '@ngrx/store';
import { Pizza } from '../reducers/pizza.reducer';

export const CREATE = '[Pizza] Create';
export const UPDATE = '[Pizza] Update';
export const DELETE = '[Pizza] Delete';

export class CreateAction implements Action {
  readonly type = CREATE;
  constructor(public pizza: Pizza) {}
}

// With this action, we want to change an existing object without affecting
// all of its other already defined properties
export class UpdateAction implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public changes: Partial<Pizza>  // The use of Partial allow us to update single properties on an object with that interface
  ) {}
}

export class DeleteAction implements Action {
  readonly type = DELETE;
  constructor(public id: string) {}
}

export type PizzaActions = CreateAction |
                           UpdateAction |
                           DeleteAction;
