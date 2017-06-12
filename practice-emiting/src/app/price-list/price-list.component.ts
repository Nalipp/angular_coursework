import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  allPairs = [{name: 'test-pair', price: '333'}];

  constructor() { }

  ngOnInit() {
  }

  onPairDataAdded(pairData: {name: string, price: string}) {
    this.allPairs.push({
      name: pairData.name,
      price: pairData.price
    });
  }

}
