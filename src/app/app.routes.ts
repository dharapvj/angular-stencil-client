import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];
