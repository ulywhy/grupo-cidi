export class Company {

	name;
	address;
	logo;
	mission;
	vision;
	slogan;
	values = [];
	socialNet = [];
	phones = [];
	solutions = [];
	sponsors = [];

	constructor(){
		//COMPANY INFO
		this.name = "Grupo CIDI";

		//LOCATION
		this.address = {
			value: "Av. Adolfo Lopéz Mateos #9 int 5, Barrio San Martín, Tepotzotlán, Estado de México.",
			mapsURL: "https://www.google.com/maps/search/?api=1&query=19.714793, -99.224068"
		};

		//LOGO
		this.logo = {
			name: "logo.png",
			alt: "our logo"
		};

		this.mission = "Nuestra razón de ser se basa en el interés de ofrecer a nuestros clientes, empleados y socios, soluciones efectivas. A través del desarrollo de nameas contundentes que impacten en la productividad, la calidad, la capacitación y el recurso humano, elevando así el nivel competitivo de nuestros clientes y nuestra gente.";

		this.vision = "esta es mi vision";

		this.slogan = "Implementamos Soluciones Efectivas";

		this.values = [
			{
				name: "Honestidad",
				definition: ""
			},
			{
				name: " Confianza",
				definition: ""
			},
			{
				name: "Calidad",
				definition: ""
			},
			{
				name: "Garantía",
				definition: ""
			},
			{
				name: "Profesionalismo",
				definition: ""
			},
			{
				name: "Seriedad",
				definition: ""
			}
		];

		//SOCIAL NETWORKS
		this.socialNet = [
			{
				//facebook
				link: "https://www.facebook.com/GrupoCidiSolucionesEfectivas/",
				page: "/grupo CIDI",
				icon: "fab fa-facebook-square fa-lg"
			},
			{
				//email
				link: "mailto:ventas_1@grupocidi.com?Subject=Hello%20User",
				page: "ventas_1@grupocidi.com",
				icon: "fas fa-envelope fa-lg"
			},
			{
				//linkedin
				link: "https://mx.linkedin.com/in/grupo-cidi-consultor%C3%ADa-inteligente-a938194b",
				page: "/company/grupo-cidi",
				icon: "fab fa-linkedin fa-lg"
			}
		];

		this.phones = [
			"015558768246",
			"015552064028",
			"015553935177",
			"015558767046"
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
						name: "Mandos medios",
						description: "description explicando el servicio 2"
					},
					{
						name: "Ventas",
						description: "description explicando el servicio 3"
					}
				],
				menu: [
					{
						name: "Escuela de supervisores",
						objective: "Proporcionar a los niveles de mando medios herramientas de liderazgo y planeación que fortalezca su liderazgo y capacidad de manejo de grupo.",
						description: ""
					},
					{
						name: "Blockapacitación",
						objective: "Por medio de diversas actividades lúdicas los sistentes practicarán diferentes principios de eficiencia y eficacia para potenciar las competencias de colaboración y liderazgo.",
						description: ""
					},
					{
						name: "Liderazgo gerencial",
						objective: "Entrenar a los mandos medios en el estilo de liderazgo que se debe ejercer para soportar las actividades del SAC.",
						description: ""
					},
					{
						name: "Liderazgo de calidad",
						objective: "Desarrollo de la capacidad de influir en el personal para asegurar el cumplimiento y resultado del SAC.",
						description: ""
					},
					{
						name: "Seminario de ventas",
						objective: "Formar en el personal de ventas las habilidades necesarias que fortalecen la labor de venta y aseguran mejores resultados.",
						description: ""
					},
					{
						name: "Seminario de servicio al cliente",
						objective: "Proporcionar al participante los elementos prácticos que le permitan una atención acorde a las expectativas del cliente con relación al servicio ofrecido.",
						description: ""
					},
					{
						name: "Manejo de actitudes",
						objective: "Difundir entre los participantes los principios del manejo de actitudes como una forma innovadora de intervenir en los procesos organizacionales, a fin de mejorar el desempeño de la persona dentro y fuera de su entorno laboral.",
						description: ""
					},
					{
						name: "Programa integral de desarrollo organizacional",
						objective: "Propicia la integración a través de la participación e involucramiento de todos los niveles de la organización.",
						description: ""
					},
					{
						name: "Planes de sensibilización",
						objective: "Establecimiento del terreno propicio para integrar los esfuerzos de la organización para lograr el cambio grupal.",
						description: ""
					},
					{
					name: "Sesiones de Team Building",
					objective: "Fomentar el espíritu de cuerpo por medio de distintos ejercicios grupales que generan un fuerte impacto en la conciencia organizacional.",
					description: ""
					}
				],
				image: {
					name: "capacitacion-dinamica.jpg",
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
					name: "consultoria.jpg",
					alt: "consultoria"
				}
			},
			{
				name: "Soporte a Recursos Humanos",
				description: "Estudios socioeconómicos a nivel nacional, Estudios poligráficos y estudios psicométricos",
				services: [
					{
						name: "Estudios socioeconómicos de cobertura nacional",
						description: "description explicando el servicio 1"
					},
					{
						name: "Estudio poligráfico",
						description: "description explicando el servicio 2"
					},
					{
						name: "Estudio psicométrico",
						description: "description explicando el servicio 3"
					}
				],
				image: {
					name: "soporte-rh.jpg",
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
