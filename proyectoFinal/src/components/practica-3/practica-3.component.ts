import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practica-3',
  imports: [
    NgClass
  ],
  templateUrl: './practica-3.component.html',
  styleUrl: './practica-3.component.css'
})
export class Practica3Component {

  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  frutas: string[] = ["Manzana", "Plátano", "Cereza", "Durazno", "Fresa"];
  nuevaFruta: string = '';

  agregarFruta() {
    this.frutas.push("Nueva fruta");
  }

  score: number = 75;

  aumentar() {
    if (this.score < 100) {
      this.score += 1;
    }
  }

  disminuir() {
    if (this.score > 0) {
      this.score -= 1;
    }
  }

  usuarios = [
    { nombre: 'George', edad: 25, activo: true },
    { nombre: 'Edil', edad: 89, activo: false },
    { nombre: 'Krishtian', edad: 55, activo: true },
    { nombre: 'Laury', edad: 25, activo: false }
  ];
}
