import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MealService } from '../../services/mealService/meal.service';

@Component({
  selector: 'app-search-by-name',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './search-by-name.component.html'
})
export class SearchByNameComponent {
  form: FormGroup;
  meals: any[] = [];
  alertaSinResultados: boolean = false;

  constructor(private fb: FormBuilder, private mealService: MealService) {
    this.form = this.fb.group({
      searchName: ['']
    });
  }

  search() {
    this.alertaSinResultados = false;
    const name = this.form.value.searchName;

    this.mealService.searchByName(name).subscribe((response) => {
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
