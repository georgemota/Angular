import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-component',
  imports: [],
  templateUrl: './message-component.component.html',
  styleUrl: './message-component.component.css'
})
export class MessageComponentComponent {
@Input() text: string = '';
}
