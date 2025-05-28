import { Component } from '@angular/core';
import { MessageComponentComponent } from './message-component/message-component.component';
import { AlertButtonComponent } from './alert-button-component/alert-button-component.component';
import { ColorBoxComponentComponent } from './color-box-component/color-box-component.component';
import { CounterComponent } from './counter-component/counter-component.component';
import { ReverseTextPipe } from '../../pipes/reverse-text/reverse-text.pipe';
import { FirstWordPipe } from '../../pipes/first-word/first-word.pipe';
import { UppercasePipe } from '../../pipes/uppercase/uppercase.pipe';

@Component({
  selector: 'app-practica-4',
  imports:
    [
      MessageComponentComponent,
      AlertButtonComponent,
      ColorBoxComponentComponent,
      CounterComponent,
      ReverseTextPipe,
      FirstWordPipe,
      UppercasePipe,
      
    ],
  templateUrl: './practica-4.component.html',
  styleUrl: './practica-4.component.css'
})
export class Practica4Component 
{
  showAlert(message: string) 
  {
    alert(message);
  }

  updateCount(count: number) {
    console.log('Nuevo valor del contador:', count);
  }
}
