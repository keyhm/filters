import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { FiltroComponent } from './filtro/filtro.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardDemoComponent, FiltroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard angular';
}
