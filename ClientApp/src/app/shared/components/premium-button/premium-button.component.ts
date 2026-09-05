import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-premium-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="onClick.emit()"
      [disabled]="disabled"
      class="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-4 font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
      [ngClass]="getClasses()"
    >
      <!-- Base Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#e5d4a6] to-[#f4ecd8] opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <!-- Inner subtle border -->
      <div class="absolute inset-0 rounded-lg border border-[#ffffff]/40"></div>
      
      <!-- Button Content -->
      <span class="relative z-10 flex items-center gap-2 text-[13px] uppercase tracking-[0.1em] text-[#1a1a1a]">
        <ng-content></ng-content>
      </span>
      
      <!-- Decorative corners inside button -->
      <span class="absolute left-2 top-2 h-2 w-2 border-l-2 border-t-2 border-[#1a1a1a]/20"></span>
      <span class="absolute right-2 bottom-2 h-2 w-2 border-r-2 border-b-2 border-[#1a1a1a]/20"></span>
    </button>
  `
})
export class PremiumButtonComponent {
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Input() disabled = false;
  @Input() className = '';
  @Output() onClick = new EventEmitter<void>();

  getClasses(): string {
    const base = this.className;
    if (this.variant === 'primary') {
      return `${base} shadow-[0_10px_30px_rgba(229,212,166,0.15)] hover:shadow-[0_15px_40px_rgba(229,212,166,0.25)] hover:-translate-y-0.5`;
    }
    return `${base} bg-transparent hover:bg-white/5`;
  }
}
