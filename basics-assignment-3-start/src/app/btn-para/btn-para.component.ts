import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-para',
  templateUrl: './btn-para.component.html',
  styles: [`
    .fontColor { color: white; }
    div { padding: 2px; }
    `]
})
export class BtnParaComponent {
  paragraphVisable = false;
  clicks = [];
  bool = true;

  toggleVisability() {
    this.clicks.push(this.clicks.length + 1)
    this.paragraphVisable = !this.paragraphVisable; 
  }

  // getBackground() {
  //   if (this.clicks.length > 5) {
  //     return 'red';
  //   }
  //   return 'green';
  // }

}
