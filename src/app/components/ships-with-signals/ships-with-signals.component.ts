import {
  Component,
  signal,
  inject,
  computed,
  OnInit,
  effect,
} from '@angular/core';

import { StarshipComponent } from '../starship/starship.component';
import { StarWarsApiService } from '../../services/starwars/ships.service';
import { StarshipsResult } from '../../models/ships';

@Component({
  selector: 'app-ships-with-signals',
  standalone: true,
  providers: [StarWarsApiService],
  imports: [StarshipComponent],
  templateUrl: './ships-with-signals.component.html',
  styleUrl: './ships-with-signals.component.scss',
})
export class ShipsWithSignalsComponent implements OnInit {
  public ships = signal<StarshipsResult | null>(null);
  public selectedShip = 'None';
  public starWarsService = inject(StarWarsApiService);
  public shipCount = computed(() => {
    return this.ships()?.results.length || 0;
  });

  constructor() {
    effect(() => {
      console.log('Ship count: ', this.shipCount());
    });
  }

  private async getAndSetShips() {
    (await this.starWarsService.getShips()).subscribe((i) => {
      this.ships.set(i);
    });
  }

  private async getAndUpdateShips() {
    (await this.starWarsService.getShips()).subscribe((i) => {
      if (this.ships() !== null) {
        this.ships.update((previousResults) => {
          return { ...previousResults, ...i };
        });
      }
    });
  }

  removeThisShip(index: number) {
    this.ships.update((prevShips) => {
      if (prevShips !== null) {
        const ships = [...prevShips.results];
        ships.splice(index, 1);

        return {
          ...prevShips,
          results: ships,
        };
      }
      return prevShips;
    });
  }

  public onClickForShips() {
    this.getAndSetShips();
  }

  public setSelectedShip($event: any): void {
    this.selectedShip = $event;
  }

  async ngOnInit(): Promise<void> {
    console.log('Welcome Home Space Traveller');
  }
}
