import { Component } from '@angular/core';
import { MealService } from '../../services/mealService/meal.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-by-letter',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './search-by-letter.component.html'
})
export class SearchByLetterComponent {
  form: FormGroup;
  meals: any[] = [];
  alertaSinResultados = false;

  constructor(private fb: FormBuilder, private mealService: MealService) {
    this.form = this.fb.group({
      letter: ['']
    });
  }

  search() {
    this.alertaSinResultados = false;
    const letter = this.form.value.letter;

    if (!letter || letter.length !== 1) {
      this.meals = [];
      return;
    }

    this.mealService.searchByFirstLetter(letter).subscribe((response) => {
      if (response.meals === null) {
        this.meals = [];
        this.alertaSinResultados = true;
        setTimeout(() => {
          this.alertaSinResultados = false;
        }, 10000);
      } else {
        this.meals = response.meals;
      }
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