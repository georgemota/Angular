import { Routes } from '@angular/router';
import { Practica1Component } from '../components/practica-1/practica-1.component';
import { Practica2Component } from '../components/practica-2/practica-2.component';
import { Practica3Component } from '../components/practica-3/practica-3.component';
import { Practica4Component } from '../components/practica-4/practica-4.component';
import { Practica5Component } from '../components/practica-5/practica-5.component';

export const routes: Routes = [
  { path: '', redirectTo: 'practica-1', pathMatch: 'full' },
  { path: 'practica-1', component: Practica1Component, data: { animation: 'Practica1'} },
  { path: 'practica-2', component: Practica2Component, data: { animation: 'Practica2'} },
  { path: 'practica-3', component: Practica3Component, data: { animation: 'Practica3'} },
  { path: 'practica-4', component: Practica4Component, data: { animation: 'Practica4'} },
  { path: 'practica-5', component: Practica5Component, data: { animation: 'Practica5'} }
];
