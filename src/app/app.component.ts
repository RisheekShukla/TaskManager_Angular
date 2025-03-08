import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponentComponent,FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasker';
}
