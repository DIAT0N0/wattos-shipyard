import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarshipsResult } from '../../models/ships';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  constructor() {}
  private _httpClient = inject(HttpClient);

  public getShips() {
    const ships = this._httpClient.get<StarshipsResult>(
      'http://swapi.dev/api/starships'
    );
    return ships;
  }
}
