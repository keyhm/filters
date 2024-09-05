import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Plain input autocomplete
 */
@Component({
  selector: 'app-multiselect-search-list',  
  templateUrl: './multiselect-search-list.component.html',
  styleUrl: './multiselect-search-list.component.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe],
})
export class MultiselectSearchListComponent implements OnInit {
  control = new FormControl('');
  productosFiltrados: Observable<string[]>;
  @Input() inputList: string[] = [];
  @Input() listName : string = "defaultName";


  ngOnInit() {
    this.productosFiltrados = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.inputList.filter(item => this._normalizeValue(item).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
