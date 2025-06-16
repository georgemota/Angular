import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerritoRestApiService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

   getPerritos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
