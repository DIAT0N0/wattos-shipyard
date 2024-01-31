import { createAction, props } from '@ngrx/store';
import { Starship } from '../../models/ships';

export const storeShips = createAction('[Starships] Store Ships');
export const storeShipsSuccess = createAction(
  '[Starships] Store Ships SUCCESS',
  props<{ starships: Starship[] }>()
);
export const storeShipsFailure = createAction(
  '[Starships] Store Ships FAILURE',
  props<{ erorMessage: string }>()
);

export const deleteShip = createAction(
  '[Starships] Delete Ship',
  props<{ index: number }>()
);
