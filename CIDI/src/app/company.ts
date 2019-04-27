export class Company {

	name;
	address;
	facebook;
	email;
	phones = [];
	values = [];
	mission;
	vision;
	solutions = [];
	sponsors = [];

	constructor(){
		//COMPANY INFO
		this.name = "Grupo CIDI";

		//LOCATION
		this.address = {
			value: "Av. Adolfo Lopéz Mateos #9 int 5, Barrio San Martín, Tepotzotlán, Estado de México.",
			mapsURL: "https://www.google.com/maps/search/?api=1&query=19.714793, -99.224068"
		}

		//SOCIAL NETWORKS
		this.facebook = {
			link: "https://www.facebook.com/GrupoCidiSolucionesEfectivas/",
			page: "/grupo CIDI"
		};

		this.email = {
			address: "ventas_1@grupocidi.com",
			header: "Subject=Hello%20User"
		};

		this.phones = [
			"015558768246",
			"015552064028",
			"015553935177",
			"015558767046"
		];

		this.mission = "esta es mi mision";

		this.vision = "esta es mi vision";

		this.values = [
			"valor 1",
			"valor 2",
			"valor 3"
		];

		//SOLUTIONS
		this.solutions = [
			{
			name: "Capacitación Dinámica",
			description: "Niveles gerenciales, mandos medios, ventas y en general a todos los niveles de la organización",
				services: [
					{
						name: "Niveles gerenciales",
						description: "description explicando el servicio 1"
					},
					{
						name: "mandos medios",
						description: "description explicando el servicio 2"
					},
					{
						name: "Ventas",
						description: "description explicando el servicio 3"
					}
				],
				image: {
					name: "capacitacion-dinamica.png",
					alt: "capacitación dinámica"
				}
			},
			{
				name: "Consultoría",
				description: "consultoría en ISO 9001, Reingeniería de procesos y desarrollo organizacional",
				services: [
					{
						name: "ISO 9001",
						description: "description explicando el servicio 1"
					},
					{
						name: "Reingeniería de procesos",
						description: "description explicando el servicio 2"
					},
					{
						name: "Desarrollo organizacional",
						description: "description explicando el servicio 3"
					}
				],
				image: {
					name: "consultoria.jpeg",
					alt: "consultoria"
				}
			},
			{
				name: "Soporte a Recursos Humanos",
				description: "Estudios socioeconómicos a nivel nacional, Estudios poligráficos y estudios psicométricos",
				services: [
					{
						name: "estudios socioeconómicos de cobertura nacional",
						description: "description explicando el servicio 1"
					},
					{
						name: "estudio poligráfico",
						description: "description explicando el servicio 2"
					},
					{
						name: "estudio psicométrico",
						description: "description explicando el servicio 3"
					}
				],
				image: {
					name: "soporte-rh.jpeg",
					alt: "soporte a recursos humanos"
				}
			}
		];

		//SPONSORS
	this.sponsors = [
			{
				path : 'assets/sponsors/sponsorMonteDePiedad.png',
				label : 'Nacional Monte de Piedad'
			},{
				path : 'assets/sponsors/osram.png',
				label : 'OSRAM de México'
			},{
				path : 'assets/sponsors/seccionAmarilla.png',
				label : 'Sección Amarilla'
			},{
				path : 'assets/sponsors/banjercito.jpeg',
				label : 'Banjercito'
			},{
				path : 'assets/sponsors/grupoGigante.png',
				label : 'Grupo Gigante'
			},{
				path : 'assets/sponsors/femsa.png',
				label : 'FEMSA'
			}
		];

	}
}
