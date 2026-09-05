import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PremiumButtonComponent } from '../../shared/components/premium-button/premium-button.component';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card.component';
import { ChevronRight, ArrowUpRight } from 'lucide-angular';
import { IconComponent } from '../../shared/components/icons/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, PremiumButtonComponent, GlassCardComponent, IconComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Features Data
  features = [
    {
      icon: 'shield',
      title: 'Premium Insurance',
      description: 'Fully comprehensive insurance included with every rental for your peace of mind.'
    },
    {
      icon: 'star',
      title: 'Luxury Fleet',
      description: 'Meticulously maintained vehicles from the world\'s most prestigious brands.'
    },
    {
      icon: 'clock',
      title: '24/7 Concierge',
      description: 'Round-the-clock support and delivery to your preferred location.'
    }
  ];

  // Featured Cars Mock Data
  featuredCars = [
    {
      name: 'Porsche 911 GT3',
      category: 'Sports',
      price: 450,
      image: '/assets/images/hero-car.jpg', // Reusing hero car as placeholder
      specs: { power: '502 hp', zeroToSixty: '3.2s', topSpeed: '197 mph' }
    },
    {
      name: 'Mercedes-Benz G63',
      category: 'SUV',
      price: 380,
      image: '/assets/images/hero-car.jpg', // Reusing hero car as placeholder
      specs: { power: '577 hp', zeroToSixty: '4.5s', topSpeed: '137 mph' }
    },
    {
      name: 'Bentley Continental',
      category: 'Luxury',
      price: 520,
      image: '/assets/images/hero-car.jpg', // Reusing hero car as placeholder
      specs: { power: '626 hp', zeroToSixty: '3.6s', topSpeed: '207 mph' }
    }
  ];

  // Reviews Data
  reviews = [
    {
      name: 'James Wilson',
      role: 'Executive',
      text: 'The seamless experience and pristine condition of the vehicles keep me coming back every time I travel.',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Entrepreneur',
      text: 'Absolutely flawless service from start to finish. The concierge delivery was a game changer for my schedule.',
      rating: 5
    }
  ];

  onRequestSubmit() {
    console.log('Request submitted');
  }
}
