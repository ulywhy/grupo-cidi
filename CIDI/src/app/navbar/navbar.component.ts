import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '.././company.service';
import { Company } from '.././company';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	@Input() sidenav;

	company: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
		this.companyService.getCompany().subscribe(company => this.company = company);
	}

}
