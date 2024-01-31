import { createReducer, on } from '@ngrx/store';
import {
  deleteShip,
  storeShips,
  storeShipsFailure,
  storeShipsSuccess,
} from './starships.actions';
import { Starship } from '../../models/ships';

export const starshipsFeatureKey = 'starships';

export interface StarshipsStoreState {
  starships: Starship[];
  errorMessage?: string;
  isLoading: boolean;
}

export const initialState: StarshipsStoreState = {
  starships: [],
  isLoading: false,
};

export const starshipsReducer = createReducer(
  initialState,
  on(storeShips, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(storeShipsSuccess, (state, action) => ({
    ...state,
    starships: action.starships,
    isLoading: false,
    errorMessage: undefined,
  })),
  on(storeShipsFailure, (state, { erorMessage }) => {
    return {
      ...state,
      erorMessage,
    };
  }),
  on(deleteShip, (state, { index }) => {
    const starships = [...state.starships];
    starships.splice(index, 1);
    return {
      ...state,
      starships,
    };
  })
);
