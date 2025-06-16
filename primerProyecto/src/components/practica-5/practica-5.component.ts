import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { PerritoRestApiService } from '../../services/perrito-rest/perrito-rest-api.service';
import { ReloadService } from '../../services/reload-service/reload-service.service';

@Component({
  selector: 'app-practica-5',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './practica-5.component.html',
  styleUrls: ['./practica-5.component.css']
})
export class Practica5Component implements OnInit, OnDestroy {
  imagenes: string[] = [];
  textos: string[] = [
    'Los perros son animales sociales que han acompañado a los humanos por miles de años. Son leales, inteligentes y excelentes compañeros.',
    'Una buena alimentación, ejercicio diario y visitas regulares al veterinario son esenciales para mantener a tu perro saludable.',
    'Los perros se comunican con ladridos, movimientos de la cola y lenguaje corporal. Observar su comportamiento ayuda a entenderlos mejor.'
  ];
  titulos: string[] = [
    'Compañeros leales',
    'Cuidado y salud',
    'Comunicación canina'
  ];
  imagenDinamica: string = '';
  cargandoGlobal: boolean = true;
  reloadSub!: Subscription;


  private imagenesCargadas = false;
  private imagenDinamicaCargada = false;

  constructor(
    private perritosServices: PerritoRestApiService,
    private reloadService: ReloadService
  ) {}

  ngOnInit() {
    this.cargandoGlobal = true;
    this.getImagenesIniciales();
    this.getPerritoDinamico();

    this.reloadSub = this.reloadService.reload$.subscribe(() => {
      this.getPerritoDinamico();
    });
  }

  getImagenesIniciales() {
    const requests = this.textos.map(() => this.perritosServices.getPerritos());

    forkJoin(requests).subscribe({
      next: (responses) => {
        this.imagenes = responses.map(r => r.message);
        this.imagenesCargadas = true;
        this.verificarCargaCompleta();
      },
      error: (err) => {
        console.error('Error cargando imágenes iniciales:', err);
        this.imagenesCargadas = true;
        this.verificarCargaCompleta();
      }
    });
  }

  getPerritoDinamico() {
    this.perritosServices.getPerritos().subscribe({
      next: (perrito) => {
        this.imagenDinamica = perrito.message;
        this.imagenDinamicaCargada = true;
        this.verificarCargaCompleta();
      },
      error: (err) => {
        console.error('Error cargando imagen dinámica:', err);
        this.imagenDinamicaCargada = true; 
        this.verificarCargaCompleta();
      }
    });
  }

  private verificarCargaCompleta() {
    if (this.imagenesCargadas && this.imagenDinamicaCargada) {
      this.cargandoGlobal = false;
    }
  }

  ngOnDestroy() {
    this.reloadSub.unsubscribe();
  }
}
4