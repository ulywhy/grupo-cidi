import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

	//COMPANY INFO
	company = {
		name: "Grupo CIDI",
		facebook: {
			link: "https://www.facebook.com/GrupoCidiSolucionesEfectivas/",
			page: "/grupo CIDI"
		},
		email: {
			address: "ventas_1@grupocidi.com",
			header: "Subject=Hello%20User"
			},
		phones: [
			"015558768246",
			"015552064028",
			"015553935177",
			"015558767046"
		],
		address: "Av. Adolfo Lopéz Mateos #9 int 5, Barrio San Martín, Tepotzotlán, Estado de México.",
	}

	scroll(el){
		console.log(el)
		el.scrollIntoView({behavior: "smooth"});
	}
}
