import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReloadService } from '../../services/reload-service.service';
import { SharedIconLinkComponent } from '../shared-icon-link/shared-icon-link.component';


@Component({
  selector: 'app-menu-component',
  imports: [RouterModule, SharedIconLinkComponent],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent {

constructor(private reloadService: ReloadService) {}

reloadPractica5() {
  this.reloadService.triggerReload();
}

}
