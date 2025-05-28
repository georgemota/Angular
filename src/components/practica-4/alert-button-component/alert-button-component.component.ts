import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-button-component',
  imports: [],
  templateUrl: './alert-button-component.component.html',
  styleUrl: './alert-button-component.component.css'
})
export class AlertButtonComponent {
  @Output() alert = new EventEmitter<string>();

  sendAlert() {
    this.alert.emit('¡Alerta enviada desde el componente hijo!');
  }
}