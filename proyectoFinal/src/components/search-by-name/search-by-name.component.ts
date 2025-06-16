import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MealService } from '../../services/mealService/meal.service';

@Component({
  selector: 'app-search-by-name',
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './search-by-name.component.html'
})
export class SearchByNameComponent {
  form: FormGroup;
  meals: any[] = [];
  alertaSinResultados: boolean = false;

  constructor(private fb: FormBuilder, private mealService: MealService) {
    this.form = this.fb.group({
      searchName: [''] //Campo searchName.
    });
  }

  search() {
    this.alertaSinResultados = false; //Reinicia la alerta.
    const name = this.form.value.searchName; //Obtiene el valor ingresado en el campo searchName.

    this.mealService.searchByName(name).subscribe((response) => {
      if (response.meals === null) { //Si no hay resultados muestra una alerta por 10 segundos
        this.meals = [];
        this.alertaSinResultados = true;
        setTimeout(() => {
          this.alertaSinResultados = false;
        }, 10000); // 10 segundos en milisegundos
      } else {
        this.meals = response.meals; //resultados encontrados y utilizados en HTML
      }
    });
  }

  getIngredients(meal: any): string[] { //Extrae un máximo de 20 ingredientes y sus cantidades. Devuelve la data en un array.
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
