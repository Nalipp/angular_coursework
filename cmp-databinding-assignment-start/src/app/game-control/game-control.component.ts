import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  let count: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(function(){ 
      console.log(this.count += 1); 
    }, 1000);
  }


}
