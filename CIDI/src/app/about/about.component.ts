import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  values = ['Honestidad','Confianza','Calidad',
            'Garantía','Profesionalismo','Seriedad']
  ngOnInit() {
  }

}
