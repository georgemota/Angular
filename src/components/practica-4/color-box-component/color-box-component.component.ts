import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-box-component',
  imports: [],
  templateUrl: './color-box-component.component.html',
  styleUrl: './color-box-component.component.css'
})
export class ColorBoxComponentComponent {
  @Input() color: string = '';
}
