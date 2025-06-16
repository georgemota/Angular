import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.css'
})
export class CounterComponent {
  count: number = 0;

  @Output() countChanged = new EventEmitter<number>();

  incrementar() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrementar() {
    this.count--;
    this.countChanged.emit(this.count);
  }
}