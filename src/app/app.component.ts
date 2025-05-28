import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponentComponent } from '../components/menu-component/menu-component.component';

@Component({
  selector: 'app-root',
  imports:
    [
      RouterModule,
      MenuComponentComponent,
      CommonModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

