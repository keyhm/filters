import { Component, Input } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


/** @title Select with multiple selection */
@Component({
  selector: 'app-multiselect-list',
  templateUrl: './multiselect-list.component.html',
  styleUrl: './multiselect-list.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class MultiselectListComponent {
  @Input() inputList: string[] = [];
  @Input() listName : string = "defaultName";
  filtro = new FormControl('');
  
  
}
