import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import type { Location } from '../../types';

import { CardComponent } from '../../components';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent, NgFor, NgIf],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Location[] = [];

  constructor() {}

  ngOnInit(): void {}
}
