import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import {
  starshipsFeatureKey,
  starshipsReducer,
} from './store/starships/starships.reducers';
import { StarshipEffects } from './store/starships/starships.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStoreDevtools(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({
      [starshipsFeatureKey]: starshipsReducer,
    }),
    provideEffects([StarshipEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
