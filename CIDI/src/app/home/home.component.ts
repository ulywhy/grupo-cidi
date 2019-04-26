import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
	animations: [
	 trigger('detailExpand', [
		 state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
		 state('expanded', style({height: '*'})),
		 transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
	 ]),
 ],
})
export class HomeComponent implements OnInit {

  constructor() { }
	ServicioExpandido: any = null;
	columnsToDisplay = ["Servicios"];

	areas = [
		{
		nombre: "Capacitación Dinámica",
		descripcion: "Niveles gerenciales, mandos medios, ventas y en general a todos los niveles de la organización",
			servicios: [
				{
					titulo: "Niveles gerenciales",
					contenido: "contenido explicando el servicio 1"
				},
				{
					titulo: "mandos medios",
					contenido: "contenido explicando el servicio 2"
				},
				{
					titulo: "Ventas",
					contenido: "contenido explicando el servicio 3"
				}
			]
		},{
			nombre: "Consultoria Servicios",
			descripcion: "consultoría en ISO 9001, Reingeniería de procesos y desarrollo organizacional",
			servicios: [
				{
					titulo: "ISO 9001",
					contenido: "contenido explicando el servicio 1"
				},
				{
					titulo: "Reingeniería de procesos",
					contenido: "contenido explicando el servicio 2"
				},
				{
					titulo: "Desarrollo organizacional",
					contenido: "contenido explicando el servicio 3"
				}
			]
		},{
			nombre: "Soporte a Recursos Humanos",
			descripcion: "Estudios socioeconómicos a nivel nacional, Estudios poligráficos y estudios psicométricos",
			servicios: [
				{
					titulo: "estudios socioeconómicos de cobertura nacional",
					contenido: "contenido explicando el servicio 1"
				},
				{
					titulo: "estudio poligráfico",
					contenido: "contenido explicando el servicio 2"
				},
				{
					titulo: "estudio psicométrico",
					contenido: "contenido explicando el servicio 3"
				}
			]
		}
	]


  sponsors = [
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
  ]
  ngOnInit() {
  }

}
