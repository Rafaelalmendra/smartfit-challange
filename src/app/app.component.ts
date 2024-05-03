import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

import { GetUnitsService } from './services';

import type { Location } from './types';

import {
  FormsComponent,
  LegendComponent,
  HeaderComponent,
  CardsListComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterOutlet,
    CommonModule,
    HttpClientModule,

    FormsComponent,
    LegendComponent,
    HeaderComponent,
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
