import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MultiselectListComponent } from '../multiselect-list/multiselect-list.component';
import { MultiselectSearchListComponent } from '../multiselect-search-list/multiselect-search-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DateRangeComponent } from "../date-range/date-range.component";
import {MatDividerModule} from '@angular/material/divider';
import { SelectedItemsListComponent } from '../selected-items-list/selected-items-list.component';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [MatExpansionModule, MultiselectListComponent, MultiselectSearchListComponent, MatGridListModule, DateRangeComponent, MatDividerModule, SelectedItemsListComponent],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {
  coeList = ['TruValidate / Fraude', 'Credit Risk', 'Income & Employment', 'Regulatorios'];
  canalList = ['Web', 'WS Soap', 'WS Rest', 'Batch', 'Batch autogestionable'];
  verticalList = ['Financial Services', 'Fintech', 'Gobierno', 'Insurance', 'Mass Market', 'RetailSolidario', 'Telco'];  
  productosList: string[] = ['Acquisition Manager', 'Collection Score', 'CreditVision Suite', 'DecisionEdge', 'Experto', 'Income Estimator', 'Información Comercial', 'Legal Check', 'Límite de Crédito Plus', 'Mantenimiento', 'Negocios', 'Originación', 'OTP', 'Preguntas de Verificación', 'Prellenado Verificado', 'Productos Regulatorios', 'Riesgo del Dispositivo', 'TruValidate', 'Ubica Plus', 'Verificación de Correo Electrónico y Teléfono', 'Verificación de Documento', 'Verificación de Identidad'];
  entidadesList: string[] = ['Almacenes Éxito', 'Grupo Argos', 'Grupo Nutresa', 'Avianca Holdings', 'Cementos Argos', 'Celsia', 'Postobón', 'Colombina', 'Organización Corona', 'Claro Colombia', 'Telefónica Movistar Colombia', 'Ecopetrol', 'Bancolombia', 'Banco de Bogotá', 'Davivienda', 'Banco Popular', 'Banco de Occidente', 'BBVA Colombia', 'Banco AV Villas', 'Banco Agrario de Colombia', 'Banco Caja Social', 'Itaú Colombia', 'Banco GNB Sudameris', 'Banco Falabella', 'Banco Finandina', 'Colpatria Multibanca', 'Scotiabank Colpatria', 'Banco Pichincha', 'Banco Mundo Mujer', 'Bancoomeva', 'Banco W', 'Banco Serfinanza', 'Grupo Sura', 'Grupo Bolívar', 'Grupo Éxito', 'Terpel'];
}
