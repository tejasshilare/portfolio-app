import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
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
}
