import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  students = [
    {
      "name":"Revathipathi Lanka",
      "designation" : "Data Scientist",
      "review" : 'The professors here are passionate and knowledgeable, and they\'re always willing to help their students succeed.',
      'imageUrl' : '../../assets/images/mypic.jpg'
    },
    {
      "name":"Vandana Varakala",
      "designation" : "Frontend Developer",
      "review" : 'This college has a great sense of community, and I\'ve made some of my best friends here.',
      'imageUrl' : '../../assets/images/s2.jpg'
    },
    {
      "name":"Saroja Dhannasi",
      "designation" : "Cloud Developer",
      "review" : 'The campus is beautiful and well-maintained, and there are always plenty of things to do both on and off campus.',
      'imageUrl' : '../../assets/images/s1.jpg'
    }
  ]
}
