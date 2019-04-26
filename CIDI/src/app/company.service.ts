import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

	company : Company = new Company();

  constructor() {}

	getCompany(): Observable<Company>{
		return of(this.company);
	}
}
