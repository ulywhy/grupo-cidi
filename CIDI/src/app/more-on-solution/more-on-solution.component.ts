import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompanyService } from '.././company.service';
import { Company } from '.././company';

@Component({
  selector: 'app-more-on-solution',
  templateUrl: './more-on-solution.component.html',
  styleUrls: ['./more-on-solution.component.scss'],
})
export class MoreOnSolutionComponent implements OnInit {

	@Input() solutionView = null;

	solution;

	constructor(
		private companyService : CompanyService,
	  private route: ActivatedRoute,
	  private router: Router
	){}

	ngOnInit() {
	  if(this.solutionView === null){
			let solutionName = this.route.snapshot.paramMap.get('name');

		  this.companyService.getCompany().subscribe(company => {
				this.solution = company.solutions.find( solution => solutionName == solution.name);
			});
		}else{
			this.solution = this.solutionView;
		}
	}

}
