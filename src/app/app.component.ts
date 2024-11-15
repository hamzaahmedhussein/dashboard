import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,
     MatButtonToggleModule,MatIconModule,MatProgressBarModule,CommonModule,MatSelectModule,
     MatCheckboxModule,
    MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
  activeView: 'graph' | 'list' = 'list';

  toggleView(view: 'graph' | 'list') {
    this.activeView = view;
  }

}
