import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PerritoRestApiService } from '../../services/perrito-rest-api.service';
import { ReloadService } from '../../services/reload-service.service';

@Component({
  selector: 'app-practica-5',
  templateUrl: './practica-5.component.html',
  styleUrls: ['./practica-5.component.css']
})
export class Practica5Component implements OnInit, OnDestroy {
  perritos: string = '';
  reloadSub!: Subscription;

  constructor(
    private perritosServices: PerritoRestApiService,
    private reloadService: ReloadService
  ) {}

  ngOnInit() {
    this.getPerritos();

    this.reloadSub = this.reloadService.reload$.subscribe(() => {
      this.getPerritos();
    });
  }

  getPerritos() {
    this.perritosServices.getPerritos().subscribe(perritos => {
      this.perritos = perritos.message;
    });
  }

  ngOnDestroy() {
    this.reloadSub.unsubscribe();
  }
}
