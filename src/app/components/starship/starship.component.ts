import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-starship',
  standalone: true,
  imports: [],
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.scss',
})
export class StarshipComponent {
  @Input() starShipName?: string;
  @Input() starShipClass?: string;
  @Output() public shipSelection = new EventEmitter();
  @Output() private deleteShip = new EventEmitter();

  selectShip() {
    this.shipSelection.emit(this.starShipName);
  }

  removeShip() {
    this.deleteShip.emit();
  }
}
