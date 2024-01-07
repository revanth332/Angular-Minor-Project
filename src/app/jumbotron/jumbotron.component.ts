import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent {
  jumbos = [
    {
      "head" : 'Computer Centers',
      "gradient" : {
        background: "linear-gradient(to right, #b92b27, #1565C0)", 
      },
      "text":'The college has  18 computer labs with an aggregate total of 2000 computers in them. The computers in these 18 labs are periodically \n updated or replaced with the latest computers. '
    },
    {
      "head" : 'Infrastructural Abundance',
      "gradient" : {
        background: "linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)", 
      },
      "text":'It is a most environment friendly campus, full of greenery, the hills on the western side adding to the contrast of the panorama.'
    },
    {
      "head" : 'Seminar Halls',
      "gradient" : {
        background: "linear-gradient(to right, #108dc7, #ef8e38)", 
      },
      "text":'The college has seven well-furnished seminar halls and one open air theatre. The detailed list of seminar halls and the auditoriums is as follows.'
    }
  ]
}
