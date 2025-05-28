import { Routes } from '@angular/router';
import { Practica1Component } from '../components/practica-1/practica-1.component';
import { Practica2Component } from '../components/practica-2/practica-2.component';
import { Practica3Component } from '../components/practica-3/practica-3.component';
import { Practica4Component } from '../components/practica-4/practica-4.component';
import { Practica5Component } from '../components/practica-5/practica-5.component';

export const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'practica-1', component: Practica1Component },
  { path: 'practica-2', component: Practica2Component },
  { path: 'practica-3', component: Practica3Component },
  { path: 'practica-4', component: Practica4Component },
  { path: 'practica-5', component: Practica5Component }
];
