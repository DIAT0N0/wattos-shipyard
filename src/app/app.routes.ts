import { Routes } from '@angular/router';
import { StarshipCatalogueComponent } from './components/starship-catalogue/starship-catalogue.component';
import { authGuard } from './guards/auth/auth.guard';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ShipsWithSignalsComponent } from './components/ships-with-signals/ships-with-signals.component';
import { ShipsWithNgrxComponent } from './components/ships-with-ngrx/ships-with-ngrx.component';

export const routes: Routes = [
  {
    path: 'ship-catalogue',
    component: StarshipCatalogueComponent,
    canActivate: [authGuard],
  },
  {
    path: 'ships-with-signals',
    component: ShipsWithSignalsComponent,
  },
  {
    path: 'ships-with-ngrx',
    component: ShipsWithNgrxComponent,
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
];
