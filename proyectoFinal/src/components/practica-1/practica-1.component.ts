import { Component } from '@angular/core';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

@Component({
  selector: 'app-practica-1',
  imports:
    [
      FirstComponentComponent,
      SecondComponentComponent,
      ThirdComponentComponent
    ],
  templateUrl: './practica-1.component.html',
  styleUrl: './practica-1.component.css'
})
export class Practica1Component {

}
