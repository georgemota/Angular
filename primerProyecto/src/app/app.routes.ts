import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { authGuard } from '../guards/auth.guard';

import { Practica1Component } from '../components/practica-1/practica-1.component';
import { Practica2Component } from '../components/practica-2/practica-2.component';
import { Practica3Component } from '../components/practica-3/practica-3.component';
import { Practica4Component } from '../components/practica-4/practica-4.component';
import { Practica5Component } from '../components/practica-5/practica-5.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'practica-1', pathMatch: 'full' },

  { path: 'practica-1', component: Practica1Component, canActivate: [authGuard], data: { animation: 'Practica1'} },
  { path: 'practica-2', component: Practica2Component, canActivate: [authGuard], data: { animation: 'Practica2'} },
  { path: 'practica-3', component: Practica3Component, canActivate: [authGuard], data: { animation: 'Practica3'} },
  { path: 'practica-4', component: Practica4Component, canActivate: [authGuard], data: { animation: 'Practica4'} },
  { path: 'practica-5', component: Practica5Component, canActivate: [authGuard], data: { animation: 'Practica5'} },

  { path: '**', redirectTo: 'practica-1' } // fallback
];
