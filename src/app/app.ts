import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioComponent } from './components/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [ PortfolioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}
