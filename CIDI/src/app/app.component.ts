import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
