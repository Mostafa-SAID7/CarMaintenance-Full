import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { ToasterComponent } from './shared/components/toaster/toaster.component';
import { NotificationCenterComponent } from './shared/components/notification-center/notification-center.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToasterComponent,
    NotificationCenterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Community Car';
}
