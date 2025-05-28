import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practica-2',
  imports: [CommonModule],
  templateUrl: './practica-2.component.html',
  styleUrl: './practica-2.component.css'
})
export class Practica2Component {
  welcomeMessage: string = 'Bienvenidos a mi aplicación de Angular';

  person = {
    name: 'Juan',
    age: 30
  };

  num1: number = 12;
  num2: number = 20;

  num3: number = 8;
  num4: number = 4;

  radius: number = 5;

  calcularArea(radius: number): number {
    const pi = 3.1416;
    return pi * radius * radius;
  }

  calcularAreaOpcional(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  isLoggedIn: boolean = true;

  currentDate: Date = new Date();
}
