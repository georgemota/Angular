import { Component } from '@angular/core';
import { MealService } from '../../services/mealService/meal.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search-by-name',
  imports:[FormsModule, NgFor],
  templateUrl: './search-by-name.component.html'
})
export class SearchByNameComponent {
  meals: any[] = [];
  searchName = '';

  constructor(private mealService: MealService) {}

  search() {
    if (!this.searchName) return;
    this.mealService.searchByName(this.searchName).subscribe(response => {
      this.meals = response.meals || [];
    });
  }
}
