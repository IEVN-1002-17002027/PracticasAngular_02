import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  title = 'PracticasAngular_02';

  num1 = '';
  resultado: number = 0;
  operacion: string = 'centigrados'; 

  calcular(){
    switch (this.operacion){
      case 'centigrados':
        this.resultado = (parseInt(this.num1) - 32) * 5 / 9;
        break;
      case'faren':
        this.resultado = (parseInt(this.num1)*9/5) + 32;
        break;
    }
  }
  }


