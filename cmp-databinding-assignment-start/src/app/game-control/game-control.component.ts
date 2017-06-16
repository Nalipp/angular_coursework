import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 1;
  interval;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(()=> {
      this.intervalFired.emit(this.lastNumber++)
    }, 1000)
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
