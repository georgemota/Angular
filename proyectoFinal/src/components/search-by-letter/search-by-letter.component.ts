import { Component } from '@angular/core';
import { MealService } from '../../services/mealService/meal.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search-by-letter',
  imports:[FormsModule, NgFor],
  templateUrl: './search-by-letter.component.html'
})
export class SearchByLetterComponent {
  meals: any[] = [];
  letter = '';

  constructor(private mealService: MealService) {}

  search() {
    if (!this.letter || this.letter.length !== 1) return;
    this.mealService.searchByFirstLetter(this.letter).subscribe(response => {
      this.meals = response.meals || [];
    });
  }
}
