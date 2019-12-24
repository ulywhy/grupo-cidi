import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
         this.show();

         console.log("hello");
  }

  show(){
    document.getElementById("myModal").style.display = "block";
  }

  close(event){
    document.getElementById("myModal").style.display = "none";
  }
}
