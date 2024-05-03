import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

import {
  FormsComponent,
  HeaderComponent,
  CardsListComponent,
} from './components';

import type { Location } from './types';
import { GetUnitsService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterOutlet,
    CommonModule,
    HttpClientModule,

    HeaderComponent,
    FormsComponent,
    CardsListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService) {}

  onSubmit() {
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
