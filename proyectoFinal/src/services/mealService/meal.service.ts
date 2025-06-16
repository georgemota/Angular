// src/app/services/meal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // 1. Buscar por nombre
  searchByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?s=${name}`);
  }

  // 2. Buscar por letra inicial
  searchByFirstLetter(letter: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?f=${letter}`);
  }

  // 3. Buscar platillo aleatorio
  getRandomMeal(): Observable<any> {
    return this.http.get(`${this.baseUrl}/random.php`);
  }
}
