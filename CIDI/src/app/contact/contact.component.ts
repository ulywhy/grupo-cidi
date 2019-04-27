import { Component, OnInit } from '@angular/core';
import { CompanyService } from '.././company.service';
import { Company } from '.././company';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	company : Company;

	solution = null;
	service;
	name;
	email;
	position;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
		this.companyService.getCompany().subscribe(company => this.company = company);
		console.log(this.company.solutions)
  }

}
