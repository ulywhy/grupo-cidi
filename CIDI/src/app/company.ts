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

		this.vision = "Ser la mejor opción de consultoría por la diversidad, calidad, atención y precio de nuestros servicios, contando con personal altamente capacitado y competitivo";

		this.slogan = "Implementamos Soluciones Efectivas";

		this.values = [
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
			},
			{
				name: "Resultados",
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
						description: ""
					},
					{
						name: "Mandos medios",
						description: ""
					},
					{
						name: "Ventas",
						description: ""
					}
				],
				menu: {
					introduction: "",
					notes: "",
					services: [
						{
							name: "Escuela de supervisores",
							objectives: [
								"Supervisión efectiva",
								"Habilidades de mando",
								"Planeación del trabajo",
								"Celdas de trabajo",
								"Servicio interno"
							],
							description: "Proporcionar a los niveles de mando medios herramientas de liderazgo y planeación que fortalezca su liderazgo y capacidad de manejo de grupo."
						},
						{
							name: "Blockapacitación",
							objectives: [
								"El reto del buen servicio",
								"Sincronía y coordinación",
								"Calidad y mejora continua",
								"Desarrollo de talento emprendedor y de socios."
							],
							description: "Por medio de diversas actividades lúdicas los asistentes practicarán diferentes principios de eficiencia y eficacia para potenciar las competencias de colaboración y liderazgo."
						},
						{
							name: "Liderazgo gerencial",
							objectives: [
								"Motivación",
								"AYLO",
								"Manejo de actitudes",
								"Liderazgo",
								"Coaching"
							],
							description: "Entrenar a los mandos medios en el estilo de liderazgo que se debe ejercer para soportar las actividades del SAC."
						},
						{
							name: "Liderazgo de calidad",
							objectives: [
								"Definición de mi liderazgo",
								"Bases prácticas de liderazgo",
								"Introducción al SAC",
								"Compromisos y conclusiones"
							],
							description: "Desarrollo de la capacidad de influir en el personal para asegurar el cumplimiento y resultado del SAC."
						},
						{
							name: "Seminario de ventas",
							objectives: [
								"Técnicas de venta",
								"Manejo de objeciones",
								"Manejo del cliente"
							],
							description: "Formar en el personal de ventas las habilidades necesarias que fortalecen la labor de venta y aseguran mejores resultados."
						},
						{
							name: "Seminario de servicio al cliente",
							objectives: [
								"Termómetro del cliente",
								"Calidad en el servicio",
								"Impactos incrementales y decreméntales",
								"Sistema efectivo de servicio"
							],
							description: "Proporcionar al participante los elementos prácticos que le permitan una atención acorde a las expectativas del cliente con relación al servicio ofrecido."
						},
						{
							name: "Manejo de actitudes",
							objectives: [
								"La importancia de las actitudes dentro de la organización",
								"Fuentes determinantes de la actitud",
								"Como se desarrollan actitudes positivas (Ciclo de la actitud)"
							],
							description: "Difundir entre los participantes los principios del manejo de actitudes como una forma innovadora de intervenir en los procesos organizacionales, a fin de mejorar el desempeño de la persona dentro y fuera de su entorno laboral."
						},
						{
							name: "Programa integral de desarrollo organizacional",
							objectives: [
								"Análisis de integración",
								"Fuerzas y debilidades",
								"Ventana de Yohari",
								"Dinámica interactiva y de integración"
							],
							description: "Propicia la integración a través de la participación e involucramiento de todos los niveles de la organización."
						},
						{
							name: "Planes de sensibilización",
							objectives: [
								"Proceso de cambio",
								"Utilización del sistema",
								"La fuerza de la actitud"
							],
							description: "Establecimiento del terreno propicio para integrar los esfuerzos de la organización para lograr el cambio grupal."
						},
						{
						name: "Sesiones de Team Building",
						objectives: [
							"Pueda decir lo que piensa",
							"Se atreva a pedir lo que necesita",
							"Reporte a tiempo y pida ayuda",
							"Sea responsable de lo que sucede",
							"Cumpla acuerdos",
							"Negocie reconociendo necesidades compartidas",
							"Puedan separar temas personales del trabajo",
							"Acepte y reconozca la constante del cambio"
						],
						description: "Fomentar el espíritu de cuerpo por medio de distintos ejercicios grupales que generan un fuerte impacto en la conciencia organizacional."
						}
					],
				},
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
				menu: {
					introduction: "El objetivo fundamental de esta línea de servicio es brindar recomendaciones viables e implantar medidas apropiadas para aumentar la productividad y la competitividad de su empresa.",
					notes: [

					],
					services: [
						{
							name: "Consultoría en ISO 9000",
							objectives: [
								"Implementación de norma ISO 9001 v. 2015",
								"Desarrollo de auditores internos",
								"Auditorias de tercera parte",
								"Proyecto 5 ́S",
								"Análisis de riesgos"
							],
							description: ""
						},
						{
							name: "Consultoría de procesos",
							objectives: [
								"Reingeniería de procesos: Integral/Parcial",
								"Planeación Estratégica",
								"Elaboración de Manual de Organización: Descripción de puestos, Elaboración de perfiles de puesto Elaboración políticas corporativas",
								"Auditorias de productividad avanzada: Auditoria de tercera parte para evaluar aplicación de mejoras, Auditorias de diagnóstico"
							],
							description: ""
						},
						{
							name: "Desarrollo organizacional",
							objectives: [
								"BlockApacitación®",
								"Diseño del cambio",
								"Coaching para niveles de mando y liderazgo",
								"Desarrollo de emprendedores",
								"Programas de Sensibilización / Integración e Identidad",
								"Diseño de estructuras organizacionales",
								"Programas de integración / Team Building",
								"Programa de Implementación 5 ́S / Capacitación Integral"
							],
							description: ""
						},
					],
				},
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
				menu: {
					introduction: "Nuestro servicio está respaldado por nuestra garantía de plena satisfacción o no facturación de nuestros servicios, de tal forma que Usted cuente con la confianza y respaldo de nuestra organización",
					notes: [
						"Los viáticos son considerados para los estudios que no estén ubicadas en la zona centro de cada estado.",
						"La duración de nuestros estudios es de 3 a 4 días hábiles después de fijada la fecha de cita y de acuerdo con el volumen demandado",
						"La propuesta solo es vigente durante el presente año, al final del periodo se efectuará una revisión de tarifas para su respectiva aprobación."
					],
					services: [
						{
							name: "Estudios socioeconómicos",
							objectives: [
								""
							],
							description: "Permiten conocer el entorno económico, social, cultural y laboral de una persona para así identificar posibles condiciones de riesgo."
						},
						{
							name: "Estudios psicométricos",
							objectives: [
								""
							],
							description: "Encargados de medir cualidades de inteligencia, personalidad y psicológicas para determinar la similitud con los requerimientos del puesto a ocupar"
						},
						{
							name: "Estudios poligráficos",
							objectives: [
								""
							],
							description: "Es un estudio que se encarga de detectar reacciones psico-fisiológicas de una persona, para determinar el"
						},
					],
				},
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
