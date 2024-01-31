import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../services/starwars/ships.service';
import { StarshipsResult } from '../../models/ships';
import { StarshipComponent } from '../starship/starship.component';

@Component({
  selector: 'app-starship-catalogue',
  standalone: true,
  imports: [StarshipComponent],
  providers: [StarWarsApiService],
  templateUrl: './starship-catalogue.component.html',
  styleUrl: './starship-catalogue.component.scss',
})
export class StarshipCatalogueComponent implements OnInit {
  public starShips!: StarshipsResult;
  public newStateItem?: string;
  public selectedShip?: string;

  constructor(private shipsApi: StarWarsApiService) {}

  public setNewStateItem(newItem: string): void {
    this.newStateItem = newItem;
  }

  public async getAndSetShips() {
    (await this.shipsApi.getShips()).subscribe((ships) => {
      console.log(ships);
      this.starShips = ships;
      console.log('SHIPS LOADED');
    });
  }

  setSelectedShip($event: string): void {
    this.selectedShip = $event;
  }

  ngOnInit(): void {
    console.log('Welcome Home Space Traveller');
  }
}
