import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import type { Location, UnitsResponse } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private allUnitsSubject = new BehaviorSubject<Location[]>([]);
  private allUnits$ = this.allUnitsSubject.asObservable();
  private filteredUnits: Location[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe((data) => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
  }

  getAllUnits(): Observable<Location[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(units: Location[]) {
    this.filteredUnits = units;
  }
}
