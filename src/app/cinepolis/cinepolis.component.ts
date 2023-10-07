import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  boletos: number = 0;
  compradores: number = 0;
  tarjeta: string = 'no';
  descuentoTarjeta: number = 0.10;
  total: number = 0;
  costoBoleto: number = 12;
  maxBoletosPorComprador: number = 7;

  mensajeDescuento: string = '';
  mensajeLimiteBoletos: string = '';

  pagar() {
    if (this.boletos < 1 || this.compradores < 1) {
      this.mensajeDescuento=("Debe ingresar al menos un comprador y un boleto.");
      return;
    }
  
    if (this.boletos > (this.maxBoletosPorComprador * this.compradores)) {
      this.mensajeDescuento = ("Se excedió el límite de boletos permitidos (7 boletos por persona)  .");
      return;
    }
  
    this.mensajeDescuento = ''; 
  
    this.total = this.boletos * this.costoBoleto;
    
    const boletosPorPersona = this.boletos / this.compradores;
  
    if (this.boletos > 5) { 
      this.total -= (this.boletos * this.costoBoleto) * 0.15; 
      this.mensajeDescuento = "Se aplicó un descuento del 15% por persona.";
    } else if (boletosPorPersona >= 3) {
      this.total -= (this.boletos * this.costoBoleto) * 0.10; 
      this.mensajeDescuento = "Se aplicó un descuento del 10% por persona.";
    } else {
      this.mensajeDescuento = "No se aplicó ningún descuento por persona.";
    }
  
    if (this.tarjeta === 'si') {
      this.total -= this.total * this.descuentoTarjeta; 
      this.mensajeDescuento += " Se aplicó un descuento adicional del 10% por usar la tarjeta.";
    }
  }
  borrarDatos() {
    this.nombre = '';
    this.boletos = 0;
    this.compradores = 0;
    this.tarjeta = 'no';
    this.total = 0;
    this.mensajeDescuento = '';
    this.mensajeLimiteBoletos = '';
  }
}