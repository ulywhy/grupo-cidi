import { Component, OnInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
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

	mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef,
							media: MediaMatcher,
							private companyService: CompanyService) {
		this.company = new Company();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit() {
		this.companyService.getCompany().subscribe(company => this.company = company);
	}

	ngOnDestroy(): void {
	 this.mobileQuery.removeListener(this._mobileQueryListener);
 }


}
