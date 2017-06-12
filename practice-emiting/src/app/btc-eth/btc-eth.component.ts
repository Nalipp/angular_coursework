import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btc-eth',
  templateUrl: './btc-eth.component.html',
  styleUrls: ['./btc-eth.component.css']
})
export class BtcEthComponent implements OnInit {
  @Output() pairDataCreated = new EventEmitter<{name: string, price: string}>();
  currencyPairName = '';
  currencyPairPrice = '';

  constructor() { }

  ngOnInit() {
  }

  onDataAdd() {
    this.pairDataCreated.emit({
      name: this.currencyPairName,
      price: this.currencyPairPrice
    });
  }
}
