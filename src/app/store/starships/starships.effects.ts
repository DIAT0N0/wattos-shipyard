import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { StarWarsApiService } from '../../services/starwars/ships.service';
import {
  storeShips,
  storeShipsFailure,
  storeShipsSuccess,
} from './starships.actions';

@Injectable()
export class StarshipEffects {
  loadShips$ = createEffect(() =>
    this.actions$.pipe(
      ofType(storeShips),
      exhaustMap(() =>
        this.starWarsService.getShips().pipe(
          map((data) => {
            return storeShipsSuccess({ starships: data.results });
          }),
          catchError((e) => of(storeShipsFailure({ erorMessage: e.message }))) // can return an action
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private starWarsService: StarWarsApiService
  ) {}
}
