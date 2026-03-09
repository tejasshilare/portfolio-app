import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  private portfolioService = inject(PortfolioService);
  portfolio = this.portfolioService.getPortfolioData();

  getLinkedInUrl(): string {
    return `https://linkedin.com/in/${this.portfolio().personalInfo.linkedin}`;
  }

  getGitHubUrl(): string {
    return `https://github.com/${this.portfolio().personalInfo.github}`;
  }

  getEmailLink(): string {
    return `mailto:${this.portfolio().personalInfo.email}`;
  }

  getPhoneLink(): string {
    return `tel:${this.portfolio().personalInfo.phone.replace(/\s/g, '')}`;
  }

  getProfileImage(): string {
      return '/assets/profile.jpeg';
  }

  getFavicon(): string {
    return '/assets/favicon.ico';
  }
}
