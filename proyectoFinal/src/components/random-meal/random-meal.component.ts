import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/mealService/meal.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-random-meal',
  imports:[FormsModule, NgIf],
  templateUrl: './random-meal.component.html'
})
export class RandomMealComponent implements OnInit {
  meal: any;

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.getMeal();
  }

  getMeal() {
    this.mealService.getRandomMeal().subscribe(response => {
      this.meal = response.meals[0];
    });
  }
}
