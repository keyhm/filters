import { Component, inject, Input } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ResultListComponent } from "../result-list/result-list.component";

@Component({
  selector: 'app-dashboard-demo',
  templateUrl: './dashboard-demo.component.html',
  styleUrl: './dashboard-demo.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ResultListComponent,    
]
})
export class DashboardDemoComponent {
  private breakpointObserver = inject(BreakpointObserver);
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Transacciones', cols: 1, rows: 1, type: 1 },
          { title: 'Total Transacciones', cols: 1, rows: 1,  type: 2 },
          { title: 'Transacciones por Producto (Mensual)', cols: 1, rows: 1, type: 1 },
          { title: 'Transacciones por Producto (Mensual)', cols: 1, rows: 1, type: 2 },
          { title: 'Transacciones por Entidad (Tota Período)', cols: 1, rows: 1, type: 1 },
          { title: 'Resultado de la Transacción', cols: 1, rows: 1, type: 3 },
          { title: 'Canal (Total período)', cols: 1, rows: 1, type: 1 },
          { title: 'Transacciones por Vertical (Total Período)', cols: 1, rows: 1, type: 1 },
          { title: 'Transacciones por Vertical (Mensual)', cols: 1, rows: 1, type: 1 },
          { title: 'Transacciones por Centro de Costo (Total Período)', cols: 1, rows: 1, type: 1 },
          { title: 'Transacciones por Centro de Costo (Mensual)', cols: 1, rows: 1, type: 1 },
          { title: 'Transacciones por Sucursal (Total periodo)', cols: 1, rows: 1, type: 4 },
          { title: 'Transacciones por Sucursal (Mensual)', cols: 1, rows: 1, type: 1 },
          { title: 'Control consumo', cols: 1, rows: 1, type: 1 },
          { title: 'Control de registros fecha actual', cols: 1, rows: 1, type: 1 }          
        ];
      }
      return [
        { title: 'Transacciones', cols: 1, rows: 1, type: 1 },
        { title: 'Total Transacciones', cols: 1, rows: 1,  type: 2 },
        { title: 'Transacciones por Producto (Mensual)', cols: 1, rows: 1, type: 1 },
        { title: 'Transacciones por Producto (Mensual)', cols: 1, rows: 1, type: 2 },
        { title: 'Transacciones por Entidad (Tota Período)', cols: 1, rows: 1, type: 1 },
        { title: 'Resultado de la Transacción', cols: 1, rows: 1, type: 3 },
        { title: 'Canal (Total período)', cols: 1, rows: 1, type: 1 },
        { title: 'Transacciones por Vertical (Total Período)', cols: 1, rows: 1, type: 1 },
        { title: 'Transacciones por Vertical (Mensual)', cols: 1, rows: 1, type: 1 },
        { title: 'Transacciones por Centro de Costo (Total Período)', cols: 1, rows: 1, type: 1 },
        { title: 'Transacciones por Centro de Costo (Mensual)', cols: 1, rows: 1, type: 1 },
        { title: 'Transacciones por Sucursal (Total periodo)', cols: 1, rows: 1, type: 4 },
        { title: 'Transacciones por Sucursal (Mensual)', cols: 1, rows: 1, type: 1 },
        { title: 'Control consumo', cols: 1, rows: 1, type: 1 },
        { title: 'Control de registros fecha actual', cols: 1, rows: 1, type: 1 }          
      ];
    })
  );
}
