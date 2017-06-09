import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  servers = ['first_server', 'second_server'];
  serverName = '';
  serverCreated = false;
  bool = true;

  createServer() {
    this.servers.push(this.serverName)
    this.serverCreated = true;
  }

  constructor() { 
  }

  ngOnInit() {
  }
  // allowNewServer = false;
  // serverCreationStatus = 'no server was created';
  // serverName = '';
  // serverCreated = false;

  // constructor() { 
  //   setTimeout( () => {
  //     this.allowNewServer = true;
  //   }, 2000); 
  // }

  // ngOnInit() {
  // }

  // onCreateServer() {
  //   this.serverCreated = true;
  //   this.serverCreationStatus = 'server was created Name is : ' + this.serverName;
  // }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
