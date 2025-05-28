import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-icon-link',
  imports: [NgClass],
  templateUrl: './shared-icon-link.component.html',
  styleUrl: './shared-icon-link.component.css'
})
export class SharedIconLinkComponent {
  @Input() icon: string = 'bi-link';
  @Input() url: string = '#';
  @Input() color: string = 'text-white';
  @Input() size: string = 'fs-5';
}
