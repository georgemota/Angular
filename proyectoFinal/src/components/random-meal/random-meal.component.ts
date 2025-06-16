import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/mealService/meal.service';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-random-meal',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './random-meal.component.html'
})
export class RandomMealComponent implements OnInit {
  meal: any = null;
  animacion: string = 'animate__fadeIn'; // clase de animación actual
  cargando: boolean = false;

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.getMeal(true); // primera carga
  }

  getMeal(esPrimeraCarga = false) {
    if (!esPrimeraCarga) {
      this.animacion = 'animate__fadeOut'; // fadeOut actual
      this.cargando = true;

      // Espera la duración del fadeOut antes de reemplazar
      setTimeout(() => {
        this.cargarPlatillo();
      }, 300); // Duración de fadeOut (300ms)
    } else {
      this.cargarPlatillo(); // sin fadeOut en la primera carga
    }
  }

  cargarPlatillo() {
    this.mealService.getRandomMeal().subscribe((response) => {
      this.meal = response.meals[0];
      this.animacion = 'animate__fadeIn'; // animación de entrada
      this.cargando = false;
    });
  }

  getIngredients(meal: any): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ing && ing.trim() !== '') {
        ingredients.push(`${measure ? measure.trim() : ''} ${ing.trim()}`.trim());
      }
    }
    return ingredients;
  }
}
