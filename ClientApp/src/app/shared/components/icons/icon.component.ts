import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <i [class]="getIconClass()" [style.fontSize.px]="size" [style.color]="color" class="icon-transition"></i>
  `,
  styles: [`
    .icon-transition {
      transition: all 0.2s ease-in-out;
    }
  `]
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: number = 24;
  @Input() customClass: string = '';
  @Input() color: string = 'currentColor';

  // Map lucide/custom names to FontAwesome classes
  private iconMap: { [key: string]: string } = {
    'ArrowUpRight': 'fa-solid fa-arrow-up-right-from-square',
    'ArrowRight': 'fa-solid fa-arrow-right',
    'ChevronLeft': 'fa-solid fa-chevron-left',
    'ChevronRight': 'fa-solid fa-chevron-right',
    'Check': 'fa-solid fa-check',
    'CheckCircle': 'fa-regular fa-circle-check',
    'shield': 'fa-solid fa-shield-halved',
    'star': 'fa-solid fa-star',
    'clock': 'fa-regular fa-clock',
    'Home': 'fa-solid fa-house',
    'Menu': 'fa-solid fa-bars',
    'User': 'fa-regular fa-user',
    'X': 'fa-solid fa-xmark',
    'Search': 'fa-solid fa-magnifying-glass'
  };

  getIconClass(): string {
    // If the name is in our map, use the mapped FontAwesome class
    const faClass = this.iconMap[this.name] || `fa-solid fa-${this.name.toLowerCase()}`;
    return `${faClass} ${this.customClass}`;
  }
}