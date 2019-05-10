import { Component, OnInit } from '@angular/core';
import { CompanyService } from '.././company.service';
import { Company } from '.././company';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	company : Company;

	constructor(private companyService: CompanyService) { }

	ngOnInit(){
		this.companyService.getCompany().subscribe(company => this.company = company);
	}

}
