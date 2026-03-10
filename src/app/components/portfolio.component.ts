import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Certifications } from './certifications/certifications';
import { Education } from './education/education';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    About,
    Skills,
    Experience,
    Certifications,
    Education
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
}
