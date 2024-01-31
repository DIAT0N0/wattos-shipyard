import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StarshipsStoreState, starshipsFeatureKey } from './starships.reducers';

const getStarshipsState =
  createFeatureSelector<StarshipsStoreState>(starshipsFeatureKey);

export const getStarshipsList = createSelector(
  getStarshipsState,
  (state) => state.starships
);

export const starshipsIsLoading = createSelector(
  getStarshipsState,
  (state) => state.isLoading
);

export const starShipserrorMessage = createSelector(
  getStarshipsState,
  (state) => state.errorMessage
);
