import { Component, OnInit } from '@angular/core';
import { CompanyService } from '.././company.service';
import { Company } from '.././company';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	company : Company;

  constructor(private companyService: CompanyService) { }

	ngOnInit(){
		this.companyService.getCompany().subscribe(company => this.company = company);
		console.log(this.company);
	}

}
