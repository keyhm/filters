import {Component, Input} from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-selected-items-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './selected-items-list.component.html',
  styleUrl: './selected-items-list.component.css'
})
export class SelectedItemsListComponent {
  @Input() inputList: string[] = [];
  @Input() listName : string = "defaultName";

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
