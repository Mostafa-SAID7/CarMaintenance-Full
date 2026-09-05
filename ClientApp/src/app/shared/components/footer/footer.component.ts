import { Component, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterLink {
  name: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: readonly FooterLink[];
}

interface SocialLink extends FooterLink {
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks: readonly SocialLink[] = [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin-in' }
  ];

  readonly footerSections: readonly FooterSection[] = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about-us' },
        { name: 'Contact', url: '/contact' },
        { name: 'Careers', url: '/careers' },
        { name: 'FAQ', url: '/faq' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Browse Cars', url: '/browse-cars' },
        { name: 'List Your Car', url: '/add-your-car' },
        { name: 'How it Works', url: '/how-it-works' },
        { name: 'Pricing', url: '/pricing' }
      ]
    }
  ];

  trackByLink: TrackByFunction<FooterLink> = (index: number, item: FooterLink) => item.url;
  trackBySocialLink: TrackByFunction<SocialLink> = (index: number, item: SocialLink) => item.icon;
  trackBySection: TrackByFunction<FooterSection> = (index: number, item: FooterSection) => item.title;
}
