import { Routes } from '@angular/router';
import { SearchByNameComponent } from '../components/search-by-name/search-by-name.component';
import { SearchByLetterComponent } from '../components/search-by-letter/search-by-letter.component';
import { RandomMealComponent } from '../components/random-meal/random-meal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'search-by-name', pathMatch: 'full' },
  { path: 'search-by-name', component: SearchByNameComponent, data: { animation: 'Search-by-meal'} },
  { path: 'search-by-letter', component: SearchByLetterComponent, data: { animation: 'Search-by-letter'} },
  { path: 'random-meal', component: RandomMealComponent, data: { animation: 'Random-meal'} }
];
