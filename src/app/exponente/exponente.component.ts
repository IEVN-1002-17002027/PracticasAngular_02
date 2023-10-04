import { Component } from '@angular/core';

@Component({
  selector: 'app-exponente',
  templateUrl: './exponente.component.html',
  styleUrls: ['./exponente.component.css']
})
export class ExponenteComponent {
  title = 'PracticasAngular_02';

  num1 = 0;
  num2 = 0;
  res = 0;
  multiplicacionResult = ''; 

  multi() {
    this.res = this.num1 * this.num2;

    this.multiplicacionResult = `${this.num1} * ${this.num2} = `;
    for (let i = 0; i < this.num2; i++) {
      this.multiplicacionResult += this.num1;
      if (i < this.num2 - 1) {
        this.multiplicacionResult += ' + ';
      }
    }
  }
}