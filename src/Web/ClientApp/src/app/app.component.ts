import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './shared/components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavMenuComponent,
    ]
})
export class AppComponent {
  title = 'app';
  
}
