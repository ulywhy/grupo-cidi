import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
