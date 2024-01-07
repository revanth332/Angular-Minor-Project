import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarosalComponent } from './carosal/carosal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component.js';
import { CardsComponent } from './cards/cards.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {StepperComponent } from './stepper/stepper.component';
import { ButtonsComponent } from './buttons/buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CarosalComponent,NavbarComponent,
            JumbotronComponent,FooterComponent,CardsComponent,SidebarComponent,
            SidebarComponent,MatSidenavModule,MatIconModule,MatDividerModule,
            StepperComponent,ButtonsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';
  showFiller = false;
}
