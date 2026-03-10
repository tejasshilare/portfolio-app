import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Education {
  private portfolioService = inject(PortfolioService);
  portfolio = this.portfolioService.getPortfolioData();
}
