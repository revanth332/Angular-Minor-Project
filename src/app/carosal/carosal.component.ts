import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';

@Component({
  selector: 'app-carosal',
  standalone: true,
  imports: [CommonModule,JumbotronComponent],
  templateUrl: './carosal.component.html',
  styleUrl: './carosal.component.css'
})
export class CarosalComponent {
  
}
