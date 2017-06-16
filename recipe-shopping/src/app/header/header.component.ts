import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() routeSelected = new EventEmitter<string>();

  routeName(feature: string) {
    this.routeSelected.emit(feature);
  }
}
