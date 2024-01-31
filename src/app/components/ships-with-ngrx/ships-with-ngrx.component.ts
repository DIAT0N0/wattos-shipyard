import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { StarshipComponent } from '../starship/starship.component';
import { StarWarsApiService } from '../../services/starwars/ships.service';
import { Starship } from '../../models/ships';
import { Store } from '@ngrx/store';
import {
  deleteShip,
  storeShips,
} from '../../store/starships/starships.actions';
import {
  getStarshipsList,
  starshipsIsLoading,
} from '../../store/starships/starships.selectors';

@Component({
  selector: 'app-ships-with-ngrx',
  standalone: true,
  imports: [StarshipComponent],
  providers: [StarWarsApiService],
  templateUrl: './ships-with-ngrx.component.html',
  styleUrl: './ships-with-ngrx.component.scss',
})
export class ShipsWithNgrxComponent implements OnInit {
  private store = inject(Store);
  public isLoading = signal<boolean>(false);
  public ships: WritableSignal<Starship[]> = signal<Starship[]>([]);
  public selectedShip = 'None';
  public starWarsService = inject(StarWarsApiService);
  public shipCount: Signal<number> = computed(() => {
    return this.ships()?.length || 0;
  });

  setLoadingState() {
    this.store
      .select(starshipsIsLoading)
      .subscribe((loadingState) => this.isLoading.set(loadingState));
  }
  initShips() {
    this.store.dispatch(storeShips());
    this.setLoadingState();
    this.getAndSetShips();
  }
  getAndSetShips() {
    this.store.select(getStarshipsList).subscribe((ships) => {
      if (ships.length > 0) {
        this.ships.set(ships);
      }
    });
  }

  removeThisShip(index: number) {
    this.store.dispatch(deleteShip({ index }));
  }

  setSelectedShip($event: any) {
    this.selectedShip = $event;
  }

  ngOnInit(): void {
    this.initShips();
    console.log('GETTING SHIPS');
  }
}
