import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Certifications {
  private portfolioService = inject(PortfolioService);
  portfolio = this.portfolioService.getPortfolioData();
}
