import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="glass rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
      [ngClass]="className"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class GlassCardComponent {
  @Input() className = '';
}
