import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-button-component',
  imports: [CommonModule],
  templateUrl: './alert-button-component.component.html',
  styleUrl: './alert-button-component.component.css'
})
export class AlertButtonComponent {
  @Output() alert = new EventEmitter<string>();

  show: boolean = false;
  message: string = '';

  sendAlert() {
    this.message = '¡Alerta enviada desde el componente hijo!';
    this.alert.emit(this.message);
    this.show = true;
    setTimeout(() => this.show = false, 4000);
  }

  closeAlert() {
    this.show = false;
  }
}
