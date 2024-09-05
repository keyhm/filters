import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

/** @title Basic datepicker */
@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.css' ,
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatGridListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeComponent {
  date = new FormControl('');

}


