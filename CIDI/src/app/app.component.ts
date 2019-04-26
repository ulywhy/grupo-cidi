import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, OnInit {

	company : Company;
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
							private companyService: CompanyService) {
		this.company = new Company();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

	ngOnInit(){
		this.companyService.getCompany().subscribe(company => this.company = company);
		console.log(this.company);
	}

	ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

	scroll(el){
		console.log(el)
		el.scrollIntoView({behavior: "smooth"});
	}
}
