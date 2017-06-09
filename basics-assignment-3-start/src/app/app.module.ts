import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BtnParaComponent } from './btn-para/btn-para.component';
import { BtnCountComponent } from './btn-count/btn-count.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnParaComponent,
    BtnCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
