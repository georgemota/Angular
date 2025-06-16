import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponentComponent } from '../components/menu-component/menu-component.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MenuComponentComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
