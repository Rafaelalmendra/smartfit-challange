import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { Location } from '../../types';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() card!: Location;

  constructor() {}

  ngOnInit(): void {}
}
