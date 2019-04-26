import { Component, OnInit } from '@angular/core';
import { CompanyService } from '.././company.service';
import { Company } from '.././company';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

	company: Company;

  constructor(private companyService: CompanyService) { }

	ngOnInit() {
		this.companyService.getCompany().subscribe(company => this.company = company);
  }



}
