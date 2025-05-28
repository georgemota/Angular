import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirtsPipePipe } from '../pipes/first-pipe/firts-pipe.pipe';
import { ThirdPipePipe } from '../pipes/third-pipe/third-pipe.pipe';
import { MessageComponentComponent } from '../components/practica-4/message-component/message-component.component';
import { ColorBoxComponentComponent } from '../components/practica-4/color-box-component/color-box-component.component';
import { AlertButtonComponent } from '../components/practica-4/alert-button-component/alert-button-component.component';
import { CounterComponent } from '../components/practica-4/counter-component/counter-component.component';
import { UppercasePipe } from '../pipes/uppercase/uppercase.pipe';
import { FirstWordPipe } from '../pipes/first-word/first-word.pipe';
import { ReverseTextPipe } from '../pipes/reverse-text/reverse-text.pipe';
import { RouterModule } from '@angular/router';
import { MenuComponentComponent } from '../components/menu-component/menu-component.component';
import { Practica1Component } from '../components/practica-1/practica-1.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    MenuComponentComponent,
    Practica1Component,
    CommonModule,
    FirtsPipePipe,
    ThirdPipePipe,
    MessageComponentComponent,
    ColorBoxComponentComponent,
    AlertButtonComponent,
    CounterComponent,
    UppercasePipe,
    FirstWordPipe,
    ReverseTextPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

