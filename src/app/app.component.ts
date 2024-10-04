import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicBoxComponent } from './dynamic-box/dynamic-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DynamicBoxComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstTask';
  faFacebook = faFacebook; 
  faTwitter = faTwitter; 
  faLinkedin = faLinkedin; 
  faGoogle = faGoogle;

}
