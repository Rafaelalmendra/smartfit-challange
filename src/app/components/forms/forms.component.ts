import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { GetUnitsService } from '../../services/get-units.service';

import { FilterUnitsService } from '../../services/filter-units.service';

import type { Location } from '../../types/location.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterUnitsService: FilterUnitsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });

    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data;
      this.filteredResults = data;
    });
  }

  onSubmit(): void {
    this.filteredResults = this.filterUnitsService.filter(
      this.results,
      this.formGroup.value.showClosed,
      this.formGroup.value.hour
    );
    this.unitService.setFilteredUnits(this.filteredResults);
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
