import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './app.component';
import { BtcEthComponent } from './btc-eth/btc-eth.component';
import { PriceListComponent } from './price-list/price-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BtcEthComponent,
    PriceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
