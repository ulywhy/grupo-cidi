import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompanyService } from '.././company.service';
import { Company } from '.././company';

@Component({
  selector: 'app-more-on-solution',
  templateUrl: './more-on-solution.component.html',
  styleUrls: ['./more-on-solution.component.scss'],
})
export class MoreOnSolutionComponent implements OnInit {

	solution;

	constructor(
		private companyService : CompanyService,
	  private route: ActivatedRoute,
	  private router: Router
	){}

	ngOnInit() {
	  let solutionName = this.route.snapshot.paramMap.get('name');

	  this.companyService.getCompany().subscribe(company => {
		console.log(company.solutions);
			this.solution = company.solutions.find( solution => solutionName == solution.name);
		});
	}

}
