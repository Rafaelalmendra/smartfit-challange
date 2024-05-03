import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import type { Location, UnitsResponse } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private allUnits: Location[] = [];

  constructor(private httpClient: HttpClient) {}

  getAllUnits(): Observable<UnitsResponse> {
    return this.httpClient.get<UnitsResponse>(this.apiUrl);
  }
}
