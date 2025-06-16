import { Component } from '@angular/core';
import { SearchByNameComponent } from '../search-by-name/search-by-name.component';
import { SearchByLetterComponent } from '../search-by-letter/search-by-letter.component';
import { RandomMealComponent } from '../random-meal/random-meal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    SearchByNameComponent,
    SearchByLetterComponent,
    RandomMealComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
