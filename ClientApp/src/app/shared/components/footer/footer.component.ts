import { Component, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

/**
 * Interface for basic footer links
 */
interface FooterLink {
  name: string;
  url: string;
}

/**
 * Interface for footer sections
 */
interface FooterSection {
  title: string;
  links: readonly FooterLink[];
}

/**
 * Interface for social media links extending basic footer links
 */
interface SocialLink extends FooterLink {
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',

})
export class FooterComponent {
  /** Current year for copyright display */
  readonly currentYear = new Date().getFullYear();

  /** Social media links */
  readonly socialLinks: readonly SocialLink[] = [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin-in' }
  ];

  /** Footer sections for dynamic rendering */
  readonly footerSections: readonly FooterSection[] = [
    {
      title: 'footer.quickLinks',
      links: [
        { name: 'footer.aboutUs', url: '/about-us' },
        { name: 'footer.contact', url: '/contact' },
        { name: 'footer.privacyPolicy', url: '/privacy-policy' },
        { name: 'footer.termsOfService', url: '/terms-of-service' },
        { name: 'footer.faq', url: '/faq' }
      ]
    },
    {
      title: 'footer.cars',
      links: [
        { name: 'footer.browseCars', url: '/browse-cars' },
        { name: 'footer.addYourCar', url: '/add-your-car' },
        { name: 'footer.howItWorks', url: '/how-it-works' },
        { name: 'footer.pricing', url: '/pricing' }
      ]
    }
  ];

  /** TrackBy function for ngFor optimization */
  trackByLink: TrackByFunction<FooterLink> = (index: number, item: FooterLink) => item.url;

  /** TrackBy function for social links */
  trackBySocialLink: TrackByFunction<SocialLink> = (index: number, item: SocialLink) => item.icon;

  /** TrackBy function for sections */
  trackBySection: TrackByFunction<FooterSection> = (index: number, item: FooterSection) => item.title;
}

