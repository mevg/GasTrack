import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ButtonModule]
})
export class HomeComponent {
}
