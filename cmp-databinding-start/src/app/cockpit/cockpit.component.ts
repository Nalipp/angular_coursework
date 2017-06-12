import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  @ViewChild('serverNameInput') newServerName: ElementRef;
  @ViewChild('serverContentInput') newServerContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName, serverContent) {
    this.serverCreated.emit({
      serverName: this.newServerName.nativeElement.value, 
      serverContent: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverName, serverContent) {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName.nativeElement.value,
      blueprintContent: this.newServerContent.nativeElement.value
    });
  }
 
}
